# Documentation for Unit Testing with Jest and Supertest

## Introduction

This documentation provides guidelines on how to set up unit testing in a Node.js application using Jest for unit tests and Supertest for testing HTTP servers.

## Prerequisites

-   Node.js installed
-   A Node.js application set up
-   Basic knowledge of JavaScript and Node.js

## Installation

1. First, install Jest and Supertest as development dependencies:

```bash
npm install --save-dev jest supertest
```

# Setting Up Jest

### Configure Jest:

2. Add a jest configuration section in your package.json or create a jest.config.js file.

Example package.json configuration:

```Json
{
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "testEnvironment": "node"
  }
}
```

## Create a Test Directory:

It’s common to have a **tests** directory or a tests directory where you will keep your test files.

# Writing Unit Tests

## Create a Sample Function:

Suppose you have a simple function in src/math.js.

```js
function add(a, b) {
	return a + b;
}
module.exports = { add };
```

1. Create a Test File: Create a test file named math.test.js in the **tests** directory

```js
const { add } = require("../src/math");

test("adds 1 + 2 to equal 3", () => {
	expect(add(1, 2)).toBe(3);
});
```

-   Run the Tests: Execute the tests using the following command:

```js
// src/app.js
const express = require("express");
const app = express();

app.get("/api/add", (req, res) => {
	const { a, b } = req.query;
	const sum = parseInt(a) + parseInt(b);
	res.json({ sum });
});

module.exports = app;
```

# Testing HTTP Servers with Supertest

Create a Test File for the Server: Create a test file named app.test.js in the **tests** directory.

```js
// tests/app/app.test.js
const request = require("supertest");
const app = require("../src/app");

describe("GET /api/add", () => {
	it("responds with json containing the sum of two numbers", async () => {
		const response = await request(app).get("/api/add?a=1&b=2");
		expect(response.statusCode).toBe(200);
		expect(response.body).toEqual({ sum: 3 });
	});
});
```

## Additional Resources

-   Jest Documentation
-   Supertest Documentation
