namespace Bodde.Library.Core.Books
{
    public class Book
    {
        public long Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string ISBN { get; set; } = string.Empty;
        public int PublishedYear { get; set; }
        public int Copies { get; set; }
    }
}