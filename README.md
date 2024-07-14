<h1 align="center">
    <img src="/content/TextLogo.png">
    <br>
    <p>connect_MongoDB</p>
</h1>

## Overview

`connect_MongoDB` is a simple Node.js application that demonstrates how to connect to a MongoDB database using Mongoose.

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running

## Getting Started

Follow these steps to set up and run the project.

### Installation

1. **Clone the repository:**
    ```sh
    git clone <https://github.com/ShoXx92/connect_MongoDB>
    cd connect_MongoDB
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

### Configuration

Update the connection string in the `index.js` file if your MongoDB server is running on a different host or port:
```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/database_testbots').then(() => {
  console.log('Connected to MongoDB!');
  process.exit(0); // Exits the process successfully
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
  process.exit(1); // Exits the process with an error
});
```

### Running the Project

To run the project, use the following command:
```sh
node index.js
```

You should see one of the following messages in your terminal:
- `Connected to MongoDB!` (if the connection is successful)
- `Error connecting to MongoDB: <error message>` (if there is an error connecting to MongoDB)

## Project Structure

```
.
├── index.js
├── package.json
└── package-lock.json
```

- `index.js`: The main file that contains the code to connect to MongoDB.
- `package.json`: Lists the project dependencies and scripts.
- `package-lock.json`: Describes the exact tree that was generated to allow subsequent installs to have the identical structure.

## Dependencies

- [mongoose](https://www.npmjs.com/package/mongoose): A MongoDB object modeling tool designed to work in an asynchronous environment.

## Troubleshooting

If you encounter any issues, ensure that:
- MongoDB is installed and running.
- The connection string is correctly configured in `index.js`.
- All dependencies are installed correctly.

## License

This project is licensed under the MIT License.