// https://github.com/expressjs/express/blob/master/test/app.js

const assert = require('assert');
const express = require('express');
const request = require('supertest');

// Simple test, should always pass, not dependent on expressjs
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

// Confirm the express application is installed correctly and
// returns the default client error (4xx) on an empty route
describe('Express', function () {
  it('should inherit from event emitter', function (done) {
    const app = express();
    app.on('foo', done);
    app.emit('foo');
  });

  it('should be callable', function () {
    const app = express();
    assert.equal(typeof app, 'function');
  });

  it('should 404 without routes', function (done) {
    request(express()).get('/').expect(404, done);
  });
});
