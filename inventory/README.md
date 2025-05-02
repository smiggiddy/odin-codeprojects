# Inventory Project

## Description

The Inventory project is a web application built with Node.js and Express.js. It's designed to manage and track inventory items. This application allows users to add, view, edit, and delete items in the inventory.

## Prerequisites

-   Node.js (v18 or later)
-   npm (comes with Node.js)
-   PostgreSQL (version 13 or later)

## Setup

1.  **Clone the repository:**
```
bash
    git clone <repository-url>
    cd inventory
    
```
2.  **Install dependencies:**
```
bash
    npm install
    
```
3.  **Set up the database:**
    -   Ensure you have PostgreSQL running.
    -   Create a database named `inventory_db` (or you can name it whatever you want and update the `config.js` file).
    -   Update the database connection details in `src/config.js`.
    -   Run the database setup script:
```
bash
        node src/db/setupDb.js
        
```
This will create the table and insert some sample data.

4. **Run the app**
```
bash
    node src/app.js
    
```
5. **View the App**

    Open a browser and go to: http://localhost:3000
## Project Structure