using System;
using AutoMapper;
using Bodde.Library.Core.Authors;
using Bodde.Library.Application.Authors;

namespace Bodde.Library.Application.Authors;

public class AuthorService
{
    private readonly IAuthorRepository _authorRepository;
    private readonly IMapper _mapper;

    public AuthorService(IAuthorRepository authorRepository, IMapper mapper)
    {
        _authorRepository = authorRepository;
        _mapper = mapper;
    }

    public async Task<List<AuthorDto>> GetAuthorsAsync()
    {
        var authors = await _authorRepository.GetAsync();
        return _mapper.Map<List<AuthorDto>>(authors);
    }
}
