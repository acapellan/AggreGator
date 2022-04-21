const express = require('express');
const path = require('path');

module.exports = (app) => {
  app.use(express.static(path.join(__dirname, '..', '..', 'aggregator', 'build')));

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'aggregator', 'build', 'index.html'));
  });
};
