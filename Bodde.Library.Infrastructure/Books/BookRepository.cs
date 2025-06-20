using System;
using Bodde.Library.Core.Books;

namespace Bodde.Library.Infrastructure.Books;

public class BookRepository : IBookRepository
{
    public Task<Book[]> GetAsync()
    {
        // Simulate fetching books from a database
        var books = new[]
        {
            new Book { Id = 1, Title = "1984", ISBN = "1234567890", PublishedYear = 1949, Copies = 5 },
            new Book { Id = 2, Title = "To Kill a Mockingbird", ISBN = "0987654321", PublishedYear = 1960, Copies = 3 }
        };
        
        return Task.FromResult(books);
    }
}
