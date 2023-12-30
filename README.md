# response-manager

[![npm version](https://badge.fury.io/js/response-manager.svg)](https://badge.fury.io/js/response-manager)

`response-manager` is a lightweight npm package for managing HTTP responses in Express.js applications. It provides easy-to-use functions for sending success and error responses with customizable status codes, messages, and data.

## Installation

```bash
npm install response-manager
```

## Example:

```javascript
const express = require("express");
const { responseSuccess, responseError } = require("response-manager");

const app = express();

// Middleware example
app.use((req, res, next) => {
  // Your middleware logic here
  console.log("Middleware executed");
  next();
});

app.get("/success", (req, res) => {
  responseSuccess(res, 200, "success", "data found");
});

app.get("/error", (req, res) => {
  responseError(res, 500, "failed", "error");
});

app.listen(4000, () => {
  console.log("app running");
});
```

## API Documentation
res: Express response object.
statusCode (optional): HTTP status code (default is 200).
status (optional): Custom status string (default is "success" for 2xx status codes and "error" for others).
message (optional): Custom message string.
data (optional): Additional data to be included in the response.
Contributing
Contributions are welcome! Follow these steps to contribute:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and test thoroughly.
Submit a pull request with a clear description of your changes.

