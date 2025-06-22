using Microsoft.EntityFrameworkCore;
using Bodde.Library.Core.Books;

namespace Bodde.Library.Infrastructure
{
    public class LibraryDbContext : DbContext
    {
        public DbSet<Book> Books => Set<Book>();
        // Add other DbSets as needed

        public LibraryDbContext(DbContextOptions<LibraryDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure entity properties, relationships, etc. here
            modelBuilder.Entity<Book>().HasIndex(b => b.ISBN).IsUnique();
            
            // Add other configurations as needed
        }
    }
}