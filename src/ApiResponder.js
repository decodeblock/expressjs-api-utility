class ApiResponder {
  /**
   * Sends a success response.
   * @param {Object} res Express response object
   * @param {string} message Response message
   * @param {number} code HTTP status code
   * @param {Object} data Response data
   * @param {Object|null} metadata Optional metadata
   */
  static successResponse(res, message, code, data, metadata = null) {
      return res.status(code).json({
          success: true,
          message,
          code,
          data,
          metadata,
      });
  }

  /**
   * Sends a failure response.
   * @param {Object} res Express response object
   * @param {string} message Response message
   * @param {number} code HTTP status code
   * @param {Object} data Response data
   * @param {Object|null} metadata Optional metadata
   */
  static failureResponse(res, message, code, data, metadata = null) {
      return res.status(code).json({
          success: false,
          message,
          code,
          data,
          metadata,
      });
  }

  /**
   * Sends a `/me` endpoint response.
   * @param {Object} res Express response object
   * @param {Object|null} user User object or null
   */
  static meEndpointResponse(res, user) {
      const isLoggedIn = user !== null;
      return res.json({
          logged_in: isLoggedIn,
          user,
      });
  }
}

module.exports = ApiResponder;
