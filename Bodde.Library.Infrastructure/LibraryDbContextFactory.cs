using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Bodde.Library.Infrastructure
{
    public class LibraryDbContextFactory : IDesignTimeDbContextFactory<LibraryDbContext>
    {
        public LibraryDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<LibraryDbContext>();
            // Use a default Sqlite connection string for design-time operations
            optionsBuilder.UseSqlite("Data Source=library.db");

            return new LibraryDbContext(optionsBuilder.Options);
        }
    }
}