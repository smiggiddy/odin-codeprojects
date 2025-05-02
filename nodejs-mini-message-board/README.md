# Node.js Mini Message Board

## Description

This project is a simple message board web application built using Node.js and Express.js. Users can view messages and add their own.

## Installation and Setup

1.  **Clone the repository:**
```
bash
    git clone <repository-url>
    
```
2.  **Navigate to the project directory:**
```
bash
    cd nodejs-mini-message-board
    
```
3.  **Install dependencies:**
```
bash
    npm install
    
```
4.  **Initialize the database:**
```
bash
    node src/db/seedDb.js
    
```
## Running the Application

1.  **Start the server:**
```
bash
    npm start
    
```
2.  **Open in browser:**
    Open your web browser and go to `http://localhost:3000` to view the application.

## Usage

Once the application is running, you can:

*   View existing messages on the main page.
*   Add a new message by clicking the "New Message" button and filling out the form.

## Project Structure

*   `src/`: Contains the source code of the application.
    *   `app.js`: The main application file.
    *   `controllers/`: Contains the controller files.
    *   `db/`: Contains files related to the database.
    *   `public/`: Contains static files (CSS, JavaScript).
    *   `routes/`: Contains the route files.
    *   `views/`: Contains the view files (EJS templates).
*   `package.json`: Contains project metadata and dependencies.