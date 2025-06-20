using System.Collections.Generic;
using System.Threading.Tasks;

namespace Bodde.Library.Core.Books
{
    public interface IBookRepository
    {
        Task<Book[]> GetAsync();
    }
}