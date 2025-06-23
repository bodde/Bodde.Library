using System.Reflection.Metadata;

namespace Bodde.Library.Infrastructure
{
    public class InfrastructureConfig
    {
        public string Provider { get; set; } = Constants.DefaultProvider;
        public string ConnectionString { get; set; } = Constants.DefaultConnectionString;

        public bool ApplyMigrations { get; set; } = false;

        public bool SeedExampleData { get; set; } = false;

        public string SeedExampleDataFolder { get; set; } = Constants.DefaultSeedExampleDataFolder;
    }
}