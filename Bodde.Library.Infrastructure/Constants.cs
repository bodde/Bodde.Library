using System;

namespace Bodde.Library.Infrastructure;

public static class Constants
{
    public const string DefaultConfigurationSectionName = "Infrastructure";

    public static class Providers
    {
        public const string SqlServer = "SqlServer";
        public const string Sqlite = "Sqlite";
    }

    public const string DefaultProvider = Providers.SqlServer;
    public const string DefaultConnectionString = "Server=localhost;Database=LibraryDb;Trusted_Connection=True;";
    public const string DefaultSeedExampleDataFolder = "SeedExampleData";
}
