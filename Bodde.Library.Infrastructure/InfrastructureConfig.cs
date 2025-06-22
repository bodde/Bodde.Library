namespace Bodde.Library.Infrastructure
{
    public class InfrastructureConfig
    {
        public string ConnectionString { get; set; } = "Data Source=library.db"; // Default value, can be overridden
        public string Provider { get; set; } = "Sqlite"; // "InMemory", "SqlServer" or "Sqlite"

        public bool ApplyMigrations { get; set; } = true;

        public bool SeedExampleData { get; set; } = true;

        public string SeedExampleDataFolder { get; set; } = "SeedExampleData"; // Default folder for seed data
    }
}