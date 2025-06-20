using Microsoft.Extensions.DependencyInjection;
using Bodde.Library.Core.Books;
using Bodde.Library.Infrastructure.Books;

namespace Bodde.Library.Infrastructure
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {
            // Register infrastructure services here

            services.AddScoped<IBookRepository, BookRepository>();


            return services;
        }
    }
}