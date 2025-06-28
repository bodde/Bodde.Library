using System;

namespace Bodde.Library.Core.Authors;

public class Author
{
    public long Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Bio { get; set; }
    public DateTime DateOfBirth { get; set; }
    public DateTime? DateOfDeath { get; set; }
}
