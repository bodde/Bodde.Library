using System;

namespace Bodde.Library.Core.Authors;

public class IAuthorRepository
{
    Task<Author[]> GetAsync();
}
