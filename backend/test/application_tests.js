// https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai

// During testing, the env variable is set to test
process.env.NODE_ENV = 'test';

// Require dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

const mongoose = require('mongoose');
const User = mongoose.model('users');

chai.use(chaiHttp);

// Load application
describe('Server application', function () {
  describe('Client errors', function () {
    it('should 400 when api key is not present', function (done) {
      chai
        .request(app)
        .get('/api')
        .end(function (err, res) {
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should 401 when an invalid api key is used', function (done) {
      chai
        .request(app)
        .get('/api/users?api-key=invalid')
        .end(function (err, res) {
          res.should.have.status(401);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should 200 without routes', function (done) {
      chai
        .request(app)
        .get('/?api-key=frontend_application')
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should 200 with undefined route', function (done) {
      chai
        .request(app)
        .get('/data/stories?api-key=frontend_application')
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should 200 with undefined API route', function (done) {
      chai
        .request(app)
        .get('/api/stories?api-key=frontend_application')
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe('Successful responses', function () {
    it('should get all the users', function (done) {
      chai
        .request(app)
        .get('/api/users?api-key=frontend_application')
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(4);
          done();
        });
    });

    it('should get all the topics', function (done) {
      chai
        .request(app)
        .get('/api/topics?api-key=frontend_application')
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(6);
          done();
        });
    });

    it('should get one topic', function (done) {
      chai
        .request(app)
        .get('/api/topics/1?api-key=frontend_application')
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('author').eql('Brian');
          res.body.should.have.property('title').eql('LinkedIn courses of interest');
          done();
        });
    });

    it('should get one topic with a date and body', function (done) {
      chai
        .request(app)
        .get('/api/topics/2?api-key=frontend_application')
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('datePosted');
          res.body.should.have.property('body');
          done();
        });
    });

    it('should get all topics from one author', function (done) {
      chai
        .request(app)
        .get('/api/user/Alejandro/topics?api-key=frontend_application')
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(2);
          done();
        });
    });

    it('should return the current user', function (done) {
      chai
        .request(app)
        .get('/auth/current_user')
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
