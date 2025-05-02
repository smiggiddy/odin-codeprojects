# Messages Project

## Description

The Messages project is a simple web-based message board application built using Node.js and Express.js. It allows users to create and view messages.

## Local Development Setup

Follow these steps to run the project locally:

1.  **Clone the Repository:**
```
bash
    git clone <repository-url>
    cd messages
    
```
2.  **Install Dependencies:**
```
bash
    npm install
    
```
3.  **Database Setup**

    The project utilizes a database to persist messages.

    *   Install postgres if not already present.
    *   Create a database and modify the config.js file accordingly
```
    # In the project directory
    psql < src/models/init.sql
    
```
4.  **Run the Application:**
```
bash
    node src/app.js
    
```
5.  **View the Application:**

    Open your web browser and go to `http://localhost:3000` to see the application.

## Additional Notes

*   Ensure that Node.js and npm are installed on your machine.
*   You can modify the application by editing the files in the `src` directory.
*   Make sure to refer to `src/config.js` to configure the correct database and ports.