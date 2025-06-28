using System;
using Microsoft.AspNetCore.Mvc;

namespace Bodde.Library.Api.Authors;

[ApiController]
[Route("[controller]")]
public class AuthorsController : ControllerBase
{
    private readonly IAuthorService _authorService;

    public AuthorsController(IAuthorService authorService)
    {
        _authorService = authorService;
    }

    // GET /authors
    [HttpGet]
    public async Task<IActionResult> GetAuthorsAsync()
    {
        var authors = await _authorService.GetAuthorsAsync();
        return Ok(authors);
    }
}
