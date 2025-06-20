namespace Bodde.Library.Core.Books
{
    public interface IBookRepository
    {
        Task<Book[]> GetAsync();
    }
}