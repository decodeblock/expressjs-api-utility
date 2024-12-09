const ResponseStatus = require('../src/ResponseStatus');

describe('ResponseStatus Module', () => {
    test('should export the correct HTTP_OK value', () => {
        expect(ResponseStatus.HTTP_OK).toBe(200);
    });

    test('should export the correct HTTP_NOT_FOUND value', () => {
        expect(ResponseStatus.HTTP_NOT_FOUND).toBe(404);
    });

    test('should contain all expected status codes', () => {
        expect(Object.keys(ResponseStatus)).toContain('HTTP_INTERNAL_SERVER_ERROR');
        expect(ResponseStatus.HTTP_INTERNAL_SERVER_ERROR).toBe(500);
    });
});