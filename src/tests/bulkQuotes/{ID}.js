'use strict';

const Test = require('tape');
const Hapi = require('hapi');
const HapiOpenAPI = require('hapi-openapi');
const Path = require('path');
const Mockgen = require('../../data/mockgen.js');

/**
 * Test for /bulkQuotes/{ID}
 */
Test('/bulkQuotes/{ID}', function (t) {

    /**
     * summary: BulkQuotesByID
     * description: The HTTP request GET /bulkQuotes/&lt;ID&gt; is used to get information regarding an earlier created or requested bulk quote. The &lt;ID&gt; in the URI should contain the bulkQuoteId that was used for the creation of the bulk quote.
     * parameters: Accept
     * produces: application/json
     * responses: 202, 400, 401, 403, 404, 405, 406, 501, 503
     */
    t.test('test BulkQuotesByID get operation', async function (t) {

        const server = new Hapi.Server();

        await server.register({
            plugin: HapiOpenAPI,
            options: {
                api: Path.resolve(__dirname, '../../config/swagger.json'),
                handlers: Path.join(__dirname, '../../handlers'),
                outputvalidation: true
            }
        });

        const requests = new Promise((resolve, reject) => {
            Mockgen().requests({
                path: '/bulkQuotes/{ID}',
                operation: 'get'
            }, function (error, mock) {
                return error ? reject(error) : resolve(mock);
            });
        });

        const mock = await requests;

        t.ok(mock);
        t.ok(mock.request);
        //Get the resolved path from mock request
        //Mock request Path templates({}) are resolved using path parameters
        const options = {
            method: 'get',
            url: '/fsp' + mock.request.path
        };
        if (mock.request.body) {
            //Send the request body
            options.payload = mock.request.body;
        } else if (mock.request.formData) {
            //Send the request form data
            options.payload = mock.request.formData;
            //Set the Content-Type as application/x-www-form-urlencoded
            options.headers = options.headers || {};
            options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        // If headers are present, set the headers.
        if (mock.request.headers && mock.request.headers.length > 0) {
            options.headers = mock.request.headers;
        }

        const response = await server.inject(options);

        t.equal(response.statusCode, 202, 'Ok response status');
        t.end();

    });
    /**
     * summary: BulkQuotesByID
     * description: The callback PUT /bulkQuotes/&lt;ID&gt; is used to inform the client of a requested or created bulk quote. The &lt;ID&gt; in the URI should contain the bulkQuoteId that was used for the creation of the bulk quote, or the &lt;ID&gt; that was used in the GET /bulkQuotes/&lt;ID&gt;.
     * parameters: body, Content-Length
     * produces: application/json
     * responses: 200, 400, 401, 403, 404, 405, 406, 501, 503
     */
    t.test('test BulkQuotesByID1 put operation', async function (t) {

        const server = new Hapi.Server();

        await server.register({
            plugin: HapiOpenAPI,
            options: {
                api: Path.resolve(__dirname, '../../config/swagger.json'),
                handlers: Path.join(__dirname, '../../handlers'),
                outputvalidation: true
            }
        });

        const requests = new Promise((resolve, reject) => {
            Mockgen().requests({
                path: '/bulkQuotes/{ID}',
                operation: 'put'
            }, function (error, mock) {
                return error ? reject(error) : resolve(mock);
            });
        });

        const mock = await requests;

        t.ok(mock);
        t.ok(mock.request);
        //Get the resolved path from mock request
        //Mock request Path templates({}) are resolved using path parameters
        const options = {
            method: 'put',
            url: '/fsp' + mock.request.path
        };
        if (mock.request.body) {
            //Send the request body
            options.payload = mock.request.body;
        } else if (mock.request.formData) {
            //Send the request form data
            options.payload = mock.request.formData;
            //Set the Content-Type as application/x-www-form-urlencoded
            options.headers = options.headers || {};
            options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        // If headers are present, set the headers.
        if (mock.request.headers && mock.request.headers.length > 0) {
            options.headers = mock.request.headers;
        }

        const response = await server.inject(options);

        t.equal(response.statusCode, 200, 'Ok response status');
        t.end();

    });
    
});