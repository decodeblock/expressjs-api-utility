# ExpressJS API Utility

[![License](https://img.shields.io/github/license/gabbyti/expressjs-api-utility.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Latest Version](https://img.shields.io/npm/v/expressjs-api-utility.svg?style=flat-square)](https://www.npmjs.com/package/expressjs-api-utility)
[![Tests Status](https://img.shields.io/github/actions/workflow/status/gabbyti/expressjs-api-utility/run-tests.yml?branch=main&label=tests&style=flat-square)](https://github.com/gabbyti/expressjs-api-utility/actions?query=workflow%3Arun-tests+branch%3Amain)
[![Total Downloads](https://img.shields.io/npm/dt/expressjs-api-utility.svg?style=flat-square)](https://www.npmjs.com/package/expressjs-api-utility)
[![Contributors](https://img.shields.io/github/contributors/gabbyti/expressjs-api-utility.svg?style=flat-square)](https://github.com/gabbyti/expressjs-api-utility/graphs/contributors)
[![Node.js Version Support](https://img.shields.io/node/v/expressjs-api-utility.svg?style=flat-square)](https://nodejs.org/)

A utility library for ExpressJS applications that provides helper functions to streamline API response handling. Simplify JSON response formatting and enhance your API development process.

---

## Installation

Install the package via npm:

```bash
npm install @decodeblock/expressjs-api-utility
```

---

## Usage

### Example
Using the `ResponseStatus` and `ApiResponder` class for handling JSON responses in an ExpressJS application:

```javascript
const express = require('express');
const { ApiResponder, ResponseStatus } = require('@decodeblock/expressjs-api-utility');

const app = express();

app.get('/success', (req, res) => {
    ApiResponder.successResponse(res, 'Request was successful', ResponseStatus.HTTP_OK, { data: 'Your data here' });
});

app.get('/failure', (req, res) => {
    ApiResponder.failureResponse(res, 'Request failed', ResponseStatus.HTTP_NOT_FOUND, { error: 'Bad Request' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

The `ApiResponder` class provides the following methods:
- `successResponse(res, message, code, data, metadata = null)`: For successful responses.
- `failureResponse(res, message, code, data, metadata = null)`: For error responses.
- `meEndpointResponse(res, user)`: For `/me` endpoint responses that return login status and user details.

---

## Testing

Run tests using:

```bash
npm test
```

Ensure that you have your test framework (e.g., Jest) set up to test the API utility functions.

---

## Changelog

Detailed changes for each release are documented in the [CHANGELOG](CHANGELOG.md).

---

## Contributing

We welcome contributions! Please see the [CONTRIBUTING](CONTRIBUTING.md) guide for details.

---

## Credits

- **[Gabriel Ibenye](https://github.com/gabbyti)**

---

## License

This package is licensed under the [MIT License](LICENSE.md).
