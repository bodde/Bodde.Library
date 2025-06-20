using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Bodde.Library.Core.Books;
using Bodde.Library.Infrastructure.Books;

namespace Bodde.Library.Infrastructure
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddInfrastructure(
            this IServiceCollection services,
            InfrastructureConfig config)
        {
            services.AddDbContext(config);

            services.AddRepositories();

            return services;
        }

        internal static IServiceCollection AddDbContext(
            this IServiceCollection services,
            InfrastructureConfig config)
        {
            // Register EF Core DbContext
            services.AddDbContext<LibraryDbContext>(options =>
            {
                switch (config.Provider)
                {
                    case "SqlServer":
                        options.UseSqlServer(config.ConnectionString);
                        break;
                    case "Sqlite":
                        options.UseSqlite(config.ConnectionString);
                        break;
                    case "InMemory":
                        options.UseInMemoryDatabase(config.ConnectionString);
                        break;
                    default:
                        throw new ArgumentException($"Unsupported provider: {config.Provider}", nameof(config.Provider));
                }
            });

            if (config.ApplyMigrations)
            {
                services.AddHostedService<MigrationHostedService>();
            }

            return services;
        }


        internal static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            // Register repositories
            services.AddScoped<IBookRepository, BookRepository>();
            // Add other repositories here as needed

            return services;
        }
    }
}