using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bodde.Library.Core.Books;

namespace Bodde.Library.Application.Books;

public class BookService
{
    private readonly IBookRepository _bookRepository;

    public BookService(IBookRepository bookRepository)
    {
        _bookRepository = bookRepository;
    }

    public async Task<IEnumerable<BookListItemDto>> GetBooksAsync()
    {
        var books = await _bookRepository.GetAsync();
        return books.Select(b => new BookListItemDto
        {
            Id = b.Id,
            Title = b.Title,
            PublishedYear = b.PublishedYear
        });
    }
}
