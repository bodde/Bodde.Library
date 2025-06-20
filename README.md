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
   git clone https://github.com/bodde/Bodde.Library
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

## System Context & Requirements

**Bodde.Library** is a classic Library Management System. The API is designed following Clean Architecture principles, ensuring separation of concerns and maintainability.

### Core Entities (Domain Layer)
- **Book**: Represents a book in the library. Attributes: Title, Author(s), ISBN, PublishedYear, Copies, etc.
- **Author**: Represents an author. Attributes: Name, Biography, etc.
- **User**: Represents a system user. Attributes: Name, Email, Role, etc.
- **Role**: Defines user roles (e.g., Admin, Librarian, Member).
- **Loan**: Represents a book loan. Attributes: Book, User, LoanDate, DueDate, ReturnDate, etc.
- **Reservation**: Represents a reservation for a book.
- **Category**: Represents book categories/genres.
- **Permission**: Defines what actions a role can perform.

### Relationships
- **Book–Author**: Many-to-many (a book can have multiple authors, an author can write multiple books).
- **Book–Category**: Many-to-many (a book can belong to multiple categories).
- **User–Role**: Many-to-one (a user has one role, a role can have many users).
- **Role–Permission**: Many-to-many (a role can have multiple permissions).
- **User–Loan**: One-to-many (a user can have multiple loans).
- **Book–Loan**: One-to-many (a book can be loaned multiple times).
- **User–Reservation**: One-to-many (a user can have multiple reservations).

### User Roles & Permissions
- **Admin**: Full access (manage users, books, loans, etc.).
- **Librarian**: Manage books, loans, reservations, but limited user management.
- **Member**: Can view/search books, make reservations, borrow/return books.

### Data Visibility
- **Admins/Librarians**: Can see all data.
- **Members**: Can see their own loans/reservations and public book data.

### Clean Architecture Layers
- **Core (Domain)**: Entities, interfaces, business rules.
- **Application**: Use cases (e.g., BorrowBook, ReturnBook, RegisterUser).
- **Infrastructure**: Data access, external services.
- **API**: Controllers, request/response models.

*Bodde.Library - Library Management System*