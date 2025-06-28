using Bodde.Library.Core.Authors;
using Microsoft.EntityFrameworkCore;

namespace Bodde.Library.Infrastructure.Authors;

public class AuthorRepository : IAuthorRepository
{

    private readonly LibraryDbContext _context;


    public AuthorRepository(LibraryDbContext context)
    {
        _context = context;
    }

    public Task<Author[]> GetAsync()
    {
        return _context.Authors
            .AsNoTracking()
            .ToArrayAsync();
    }
}
