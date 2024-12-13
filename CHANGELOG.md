# Changelog

All notable changes to `expressjs-api-utility` will be documented in this file.

## v1.1.1 - 2024-12-13

- Updated Readme

## v1.1.0 - 2024-12-09

### Added

- Introduced `ResponseStatus` to simplify usage of HTTP status codes in applications.
  - Example:
    ```javascript
    const { ResponseStatus } = require('@decodeblock/expressjs-api-utility');
    console.log(ResponseStatus.HTTP_OK); // 200
    
    
    ```
  

## v1.0.2 - 2024-12-09

### Fixed

- Corrected the `main` field in the `package.json` file to point to the proper entry file (`src/index.js`), resolving issues with importing the package and ensuring compatibility with Node.js.


---

### Changed

- Minor internal adjustments to ensure package structure aligns with Node.js module resolution best practices.


---

**Upgrade Note:**
To apply this fix, update your package to the latest version using the following command:

```bash
npm install @decodeblock/expressjs-api-utility@latest



```
## v1.0.1 - 2024-12-09

### Fixed

- Corrected the `main` field in the `package.json` file to point to the proper entry file (`src/index.js`), resolving issues with importing the package and ensuring compatibility with Node.js.


---

### Changed

- Minor internal adjustments to ensure package structure aligns with Node.js module resolution best practices.


---

**Upgrade Note:**
To apply this fix, update your package to the latest version using the following command:

```bash
npm install @decodeblock/expressjs-api-utility@latest




```
## v1.0.0 - 2024-12-09

### Added

- Initial stable release of `expressjs-api-utility`.
- Includes `ApiResponder` class to simplify response handling with methods for success and error responses.
- Full test coverage for the main functionality.

### Changed

- Improved response handling logic for better error management.
- Enhanced documentation and added example usage for better integration guidance.

### Fixed

- Fixed issues with response structure in previous versions.
- Improved test suite to account for various edge cases.

### Removed

- No features have been removed in this release.

### Notes

- This is the first stable version, and all major features are now in place.
- Users are encouraged to upgrade to this version for the latest features and stability.

### Contributors

- **[Gabriel Ibenye](https://github.com/gabbyti)**

### Changelog

- See the [CHANGELOG](CHANGELOG.md) for a detailed list of changes.
