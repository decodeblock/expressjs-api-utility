const express = require('express');
const request = require('supertest');
const ApiResponder = require('../src/ApiResponder');
const ResponseStatus = require('../src/ResponseStatus');

describe('ApiResponder', () => {
    let app;

    beforeEach(() => {
        app = express();
        app.use(express.json());
    });

    test('successResponse returns the correct structure', async () => {
        app.get('/success', (req, res) => {
            ApiResponder.successResponse(res, 'Success message', 200, { key: 'value' }, { meta: 'data' });
        });

        const response = await request(app).get('/success');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            success: true,
            message: 'Success message',
            code: 200,
            data: { key: 'value' },
            metadata: { meta: 'data' },
        });
    });

    test('failureResponse returns the correct structure', async () => {
        app.get('/failure', (req, res) => {
            ApiResponder.failureResponse(res, 'Error message', 400, { error: 'Invalid input' }, { meta: 'data' });
        });

        const response = await request(app).get('/failure');
        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            success: false,
            message: 'Error message',
            code: 400,
            data: { error: 'Invalid input' },
            metadata: { meta: 'data' },
        });
    });

    test('meEndpointResponse returns correct user login status', async () => {
        app.get('/me', (req, res) => {
            ApiResponder.meEndpointResponse(res, { id: 1, name: 'John Doe' });
        });

        const response = await request(app).get('/me');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            logged_in: true,
            user: { id: 1, name: 'John Doe' },
        });
    });

    test('meEndpointResponse returns logged out status when user is null', async () => {
        app.get('/me', (req, res) => {
            ApiResponder.meEndpointResponse(res, null);
        });

        const response = await request(app).get('/me');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            logged_in: false,
            user: null,
        });
    });
});
