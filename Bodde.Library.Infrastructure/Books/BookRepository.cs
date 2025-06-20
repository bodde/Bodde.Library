using Bodde.Library.Core.Books;
using Microsoft.EntityFrameworkCore;

namespace Bodde.Library.Infrastructure.Books;

public class BookRepository : IBookRepository
{
    private readonly LibraryDbContext _context;
    public BookRepository(LibraryDbContext context)
    {
        _context = context;
    }

    public Task<Book[]> GetAsync()
    {
        return _context.Books
            .AsNoTracking()
            .ToArrayAsync();
    }
}
