## Index

- [Bodde.Library](#boddelibrary)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Build and Run](#build-and-run)
  - [Running Tests](#running-tests)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [System Context & Requirements](#system-context--requirements)
  - [Core Entities (Domain Layer)](#core-entities-domain-layer)
  - [Relationships](#relationships)
  - [User Roles & Permissions](#user-roles--permissions)
  - [Data Visibility](#data-visibility)
  - [Clean Architecture Layers](#clean-architecture-layers)
- [Classic Use Cases](#classic-use-cases)
  1. [Register User (External Authentication)](#1-register-user-external-authentication)
  2. [Login (External Authentication)](#2-login-external-authentication)
  3. [Assign/Update User Roles and Permissions (Admin/Librarian)](#3-assignupdate-user-roles-and-permissions-adminlibrarian)
  4. [Add Book](#4-add-book)
  5. [Update Book](#5-update-book)
  6. [Delete Book](#6-delete-book)
  7. [Search/List Books](#7-searchlist-books)
  8. [Borrow Book (Loan)](#8-borrow-book-loan)
  9. [Return Book](#9-return-book)
  10. [Reserve Book](#10-reserve-book)
  11. [Cancel Reservation](#11-cancel-reservation)
  12. [List User Loans/Reservations](#12-list-user-loansreservations)
  13. [Manage Users (Admin/Librarian)](#13-manage-users-adminlibrarian)

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
- [dotnet-ef CLI tools](https://learn.microsoft.com/ef/core/cli/dotnet) (for database migrations)
 

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

---

## Classic Use Cases

Below are the classic use cases the API should implement, including input, logic/business rules, output, and possible errors.

### 1. Register User (External Authentication)
- **Input:** User details (name, email, optional additional info) received after successful authentication with an external OpenID Connect/OAuth2 provider.
- **Logic:**  
  - Receive user identity from external provider (e.g., via callback or token).
  - Use email or username from the external provider to link or create a local user entity.
  - If user does not exist locally, create a new user with default role (e.g., Member).
  - Do not manage password locally.
  - Roles and permissions are managed in the local database and are not part of JWT claims.
- **Output:** Confirmation of registration or linking, user ID.
- **Errors:** Email already exists (if trying to register manually), invalid input, external authentication failed.

### 2. Login (External Authentication)
- **Input:** Authentication via external OpenID Connect/OAuth2 provider (no password handled by API).
- **Logic:**  
  - Redirect user to external provider for authentication.
  - On successful authentication, receive user info (email/username).
  - Look up local user entity by email/username.
  - If user exists, allow login and issue session/token as needed.
  - If user does not exist, optionally auto-register or deny access.
  - Roles and permissions are loaded from local database, not from JWT claims.
- **Output:** Auth/session token (if needed), user info.
- **Errors:** Invalid credentials at provider, user not found locally, external authentication failed.

### 3. Assign/Update User Roles and Permissions (Admin/Librarian)
- **Input:** User ID, roles and/or permissions to assign or update.
- **Logic:**  
  - Only administrators or librarians can assign or update roles and permissions.
  - Update roles and permissions in the local database.
  - Changes are effective immediately for authorization checks, regardless of JWT claims.
- **Output:** Confirmation, updated user info.
- **Errors:** User not found, permission denied, invalid input.

### 4. Add Book
- **Input:** Book details (title, authors, ISBN, categories, published year, copies)
- **Logic:**  
  - Validate input.
  - Check for duplicate ISBN.
  - Create book and associate authors/categories.
- **Output:** Book ID, confirmation.
- **Errors:** Duplicate ISBN, invalid input, permission denied.

### 5. Update Book
- **Input:** Book ID, updated details
- **Logic:**  
  - Validate input.
  - Check if book exists.
  - Update book details.
- **Output:** Confirmation, updated book info.
- **Errors:** Book not found, invalid input, permission denied.

### 6. Delete Book
- **Input:** Book ID
- **Logic:**  
  - Check if book exists.
  - Ensure no active loans for the book.
  - Delete book.
- **Output:** Confirmation.
- **Errors:** Book not found, book on loan, permission denied.

### 7. Search/List Books
- **Input:** Search filters (title, author, category, ISBN, etc.)
- **Logic:**  
  - Query books based on filters.
  - Paginate results.
- **Output:** List of books matching criteria.
- **Errors:** None (empty list if no match).

### 8. Borrow Book (Loan)
- **Input:** User ID, Book ID
- **Logic:**  
  - Check user eligibility (e.g., max loans, outstanding fines).
  - Check book availability.
  - Create loan record with due date.
- **Output:** Loan confirmation, due date.
- **Errors:** Book unavailable, user not eligible, permission denied.

### 9. Return Book
- **Input:** Loan ID
- **Logic:**  
  - Check if loan exists and is active.
  - Mark loan as returned, record return date.
  - Calculate and record any late fees.
- **Output:** Confirmation, any fees due.
- **Errors:** Loan not found, already returned, permission denied.

### 10. Reserve Book
- **Input:** User ID, Book ID
- **Logic:**  
  - Check if book is available or already reserved.
  - Create reservation if allowed.
- **Output:** Reservation confirmation, position in queue.
- **Errors:** Book available (no need to reserve), already reserved by user, permission denied.

### 11. Cancel Reservation
- **Input:** Reservation ID
- **Logic:**  
  - Check if reservation exists and belongs to user.
  - Cancel reservation.
- **Output:** Confirmation.
- **Errors:** Reservation not found, permission denied.

### 12. List User Loans/Reservations
- **Input:** User ID (or current user)
- **Logic:**  
  - Retrieve all active/past loans or reservations for user.
- **Output:** List of loans/reservations.
- **Errors:** None (empty list if none).

### 13. Manage Users (Admin/Librarian)
- **Input:** User management actions (list, update, delete, assign roles)
- **Logic:**  
  - Perform requested action with permission checks.
- **Output:** Confirmation, user info.
- **Errors:** User not found, permission denied, invalid input.

---