# Bodde.Library

Bodde.Library is a Library Management System application built with ASP.NET Core. It provides APIs and infrastructure for managing books, users, and library operations.

## Project Structure

- **Bodde.Library.Api**: ASP.NET Core Web API project (entry point)
- **Bodde.Library.Application**: Application logic and use cases
- **Bodde.Library.Core**: Core domain models and interfaces
- **Bodde.Library.Infrastructure**: Infrastructure implementations (e.g., data access)
- **Bodde.Library.Tests**: Unit tests

## Getting Started

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Visual Studio 2022+](https://visualstudio.microsoft.com/) or [Visual Studio Code](https://code.visualstudio.com/)

### Build and Run

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd Bodde.Library
   ```

2. **Restore dependencies:**
   ```sh
   dotnet restore
   ```

3. **Build the solution:**
   ```sh
   dotnet build
   ```

4. **Run the API:**
   ```sh
   dotnet run --project Bodde.Library.Api
   ```

5. **Access the API:**
   - Open your browser and navigate to [http://localhost:5216/swagger](http://localhost:5216/swagger) for the Swagger UI.

### Running Tests

To run unit tests:

```sh
dotnet test
```

## Configuration

- API configuration files are in [`Bodde.Library.Api/appsettings.json`](Bodde.Library.Api/appsettings.json) and [`Bodde.Library.Api/appsettings.Development.json`](Bodde.Library.Api/appsettings.Development.json).
- Launch profiles are in [`Bodde.Library.Api/Properties/launchSettings.json`](Bodde.Library.Api/Properties/launchSettings.json).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

## License

This project is licensed under the MIT License.

---

*Bodde.Library - Library Management System*