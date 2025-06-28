using System;

namespace Bodde.Library.Application.Authors;

public class AuthorProfile : AutoMapper.Profile
{
    public AuthorProfile()
    {
        CreateMap<Bodde.Library.Core.Authors.Author, Bodde.Library.Application.Authors.AuthorDto>();
    }
}
