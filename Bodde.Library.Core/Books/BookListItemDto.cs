using System;

namespace Bodde.Library.Core.Books
{
    public class BookListItemDto
    {
        public long Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public int PublishedYear { get; set; }
    }
}