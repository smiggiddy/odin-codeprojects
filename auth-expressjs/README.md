# Auth-ExpressJS Project

## Description

This project is a web application built with Express.js and Node.js, serving as an authentication server. It allows users to sign up and log in, managing user sessions and providing basic user authentication functionality.

## Prerequisites

-   Node.js (v14 or later recommended)
-   npm (usually comes with Node.js)
-   PostgreSQL

## Installation

1.  **Clone the repository:**
```
bash
    git clone <repository-url>
    cd auth-expressjs
    
```
2.  **Install dependencies:**
```
bash
    npm install
    
```
3. **Create database:**

    Create a database in postgres

4. **Set up the database**
```
bash
    psql -d <database-name> -f migrations/init.sql
    
```
## Running the Project

1.  **Start the application:**
```
bash
    npm start
    
```
This command starts the server, and you can access the application in your browser at `http://localhost:3000`.
    - Make sure you change the db password and username in the app.js file
## Project Structure

-   `src/`: Contains the main application code.
    -   `app.js`: The main application file where the Express.js server is set up.
    -   `views/`: Contains the EJS templates for the views.
    -   `migrations/`: Contains the sql file used to setup the database
-   `package.json`: Lists the project dependencies and scripts.
-   `package-lock.json`: Ensures consistent dependency versions across installations.
- `migrations`: database configuration files

## Usage

-   **Sign Up:** Navigate to `http://localhost:3000/sign-up` to create a new account.
-   **Log In:** Navigate to `http://localhost:3000/log-in` to log in with your credentials.
-   **Home:** Navigate to `http://localhost:3000` to access the home page.