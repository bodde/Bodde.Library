using System;
using System.Text.Json;
using Bodde.Library.Core.Books;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Bodde.Library.Infrastructure.Services;

public class SeedExampleDataHostedService : IHostedService
{
    private readonly IOptions<InfrastructureConfig> _config;
    private readonly IServiceProvider _serviceProvider;
    private readonly ILogger<SeedExampleDataHostedService> _logger;

    public SeedExampleDataHostedService(
        IOptions<InfrastructureConfig> config,
        IServiceProvider serviceProvider,
        ILogger<SeedExampleDataHostedService> logger
        )
    {
        _config = config;
        _serviceProvider = serviceProvider;
        _logger = logger;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("Starting to seed example data...");

        // scope is used to ensure that the DbContext is disposed properly after use
        using var scope = _serviceProvider.CreateScope();
        var ctx = scope.ServiceProvider.GetRequiredService<LibraryDbContext>();

        var booksDataContent = await LoadBooksDataFromFileAsync(cancellationToken);
        var booksToSeed = DeserializeBooksData(booksDataContent);

        var existingBooks = await GetExistingBooksAsync(ctx, booksToSeed, cancellationToken);
        var booksToAdd = IdentifyBooksToAdd(booksToSeed, existingBooks);

        await AddBooksAsync(ctx, booksToAdd, cancellationToken);

        await ctx.SaveChangesAsync(cancellationToken);
        
        _logger.LogInformation("Example data seeding completed successfully.");
    }
    
    public Task StopAsync(CancellationToken cancellationToken)
    {
        // Nothing to do on stop
        return Task.CompletedTask;
    }

    private async Task AddBooksAsync(LibraryDbContext ctx, List<Book> booksToAdd, CancellationToken cancellationToken)
    {
        if (booksToAdd.Any())
        {
            await ctx.Books.AddRangeAsync(booksToAdd, cancellationToken);
            _logger.LogInformation("Seeded {Count} books to the database.", booksToAdd.Count);
        }
        else
        {
            _logger.LogInformation("No new books to seed. All books already exist in the database.");
        }
    }

    private static List<Book> IdentifyBooksToAdd(List<Book> books, List<Book> existingBooks)
    {
        return books
            .ExceptBy(existingBooks.Select(b => b.ISBN), b => b.ISBN)
            .ToList();
    }

    private async Task<List<Book>> GetExistingBooksAsync(LibraryDbContext ctx, List<Book> booksToSeed, CancellationToken cancellationToken)
    {
        var isbnsToSeed = booksToSeed.Select(b => b.ISBN).ToList();
        return await ctx.Books
            .Where(b => isbnsToSeed.Contains(b.ISBN))
            .ToListAsync(cancellationToken);
    }

    private static List<Book> DeserializeBooksData(string booksDataContent)
    {
        var booksToSeed = JsonSerializer.Deserialize<List<Book>>(booksDataContent);
        if (booksToSeed == null)
        {
            throw new InvalidOperationException("Failed to deserialize books data. Please check the format of the SeedExampleData/Books.json file.");
        }

        return booksToSeed;
    }

    private async Task<string> LoadBooksDataFromFileAsync(CancellationToken cancellationToken)
    {
        var booksDataFilePath = Path.Combine(_config.Value.SeedExampleDataFolder, "Books.json");
        if (!File.Exists(booksDataFilePath))
        {
            throw new FileNotFoundException($"Seed data file not found: {booksDataFilePath}");
        }
        var booksDataContent = await File.ReadAllTextAsync(booksDataFilePath, cancellationToken);

        return booksDataContent;
    }
}
