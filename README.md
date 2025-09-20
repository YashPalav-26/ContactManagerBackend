# Contact Manager Backend

A backend API for managing contacts, built using **Node.js**, **Express.js**, and **MongoDB**. This project allows users to register, log in, and manage their contacts securely with authentication.

## Features

- User authentication (Register/Login)
- JWT-based authentication and authorization
- CRUD operations for managing contacts
- Middleware for error handling
- Secure password hashing using bcrypt
- Organized project structure

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **Other Dependencies:** dotenv, express-async-handler

## Installation

Follow these steps to set up the project locally:

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v16 or later)
- **MongoDB** (Local instance or Atlas cloud database)

### Clone the Repository
```sh
git clone https://github.com/YashPalav-26/ContactManagerBackend.git
cd ContactManagerBackend
```

### Install Dependencies
```sh
npm install
```

### Environment Variables
Create a `.env` file in the root directory and add the following:

```
PORT=5000
CONNECTION_STRING=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_jwt_secret
```

### Start the Server
```sh
npm start
```

The API will run on `http://localhost:5000` (or the specified port).

## API Endpoints

### Authentication
| Method | Endpoint          | Description         |
|--------|------------------|---------------------|
| POST   | `/api/users/register` | Register a new user |
| POST   | `/api/users/login`    | Log in a user      |
| GET    | `/api/users/current`  | Get current user info (protected) |

### Contacts
| Method | Endpoint          | Description         |
|--------|------------------|---------------------|
| GET    | `/api/contacts/`  | Get all contacts (protected) |
| POST   | `/api/contacts/`  | Create a contact (protected) |
| GET    | `/api/contacts/:id` | Get a specific contact (protected) |
| PUT    | `/api/contacts/:id` | Update a contact (protected) |
| DELETE | `/api/contacts/:id` | Delete a contact (protected) |

## Project Structure
```
ContactManagerProject
├── configs
│   ├── dbConnection.js
├── controllers
│   ├── contactController.js
│   ├── usersController.js
├── middleware
│   ├── errorHandler.js
│   ├── validateTokenHandler.js
├── models
│   ├── contactModel.js
│   ├── userModel.js
├── Routes
│   ├── contacts.routes.js
│   ├── userRoutes.routes.js
├── .gitignore
├── package.json
├── server.js
├── constants.js
└── .env (not included in repo)
```

## Contribution
If you'd like to contribute, feel free to fork the repository and submit a pull request.

## License
This project is licensed under the **MIT License**.

---
**Author:** [Yash Palav](https://github.com/YashPalav-26)

