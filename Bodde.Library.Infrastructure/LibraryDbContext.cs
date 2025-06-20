using Microsoft.EntityFrameworkCore;
using Bodde.Library.Core.Books;

namespace Bodde.Library.Infrastructure
{
    public class LibraryDbContext : DbContext
    {
        public LibraryDbContext(DbContextOptions<LibraryDbContext> options) : base(options) { }

        public DbSet<Book> Books => Set<Book>();
        // Add other DbSets as needed
    }
}