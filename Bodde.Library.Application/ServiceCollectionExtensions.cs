using Microsoft.Extensions.DependencyInjection;
using Bodde.Library.Application.Books;

namespace Bodde.Library.Application
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(ServiceCollectionExtensions).Assembly);

            // Register application services here

            services.AddScoped<BookService>();
            services.AddScoped<AuthorService>();
            
            return services;
        }
    }
}