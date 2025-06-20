namespace Bodde.Library.Infrastructure
{
    public class InfrastructureConfig
    {
        public string ConnectionString { get; set; } = string.Empty;
        public string Provider { get; set; } = "Sqlite"; // "InMemory", "SqlServer" or "Sqlite"

        public bool ApplyMigrations { get; set; } = true;
    }
}