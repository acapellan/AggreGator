/**
 * This function is only intended to provide assistance during development. It is not used when the
 * application is deployed to production. Any route requests that begin with /api or /auth during
 * development will be intercepted by this proxy middleware, and direct the request to the express
 * server that hosts the application's API.
 * 
 * 
 */
const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    ['/api', '/auth'],
    createProxyMiddleware({
      target: 'http://localhost:5000'
    })
  );
};
