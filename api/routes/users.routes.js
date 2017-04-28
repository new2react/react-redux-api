'use strict';

var usersController = require('../controllers/users.controller'),
  timesheetsController = require('../controllers/timesheets.controller'),
  timeunitsController = require('../controllers/timeunits.controller');

exports.register = function (server, options, next) {

  var users = '/users';
  var userId = '/users/{userId}';
  var timesheets = '/users/{userId}/timesheets';
  var timesheetId = '/users/{userId}/timesheets/{timesheetId}';
  var timeunits = '/users/{userId}/timesheets/{timesheetId}/timeunits';
  var timeunitId = '/users/{userId}/timesheets/{timesheetId}/timeunits/{timeunitId}';

  server.route([
    {
      method: 'GET', path: users, handler: usersController.index,
      config: {auth: false, cors: {origin: ['*'], credentials: true}}
    },
    {
      method: 'POST', path: users, handler: usersController.create,
      config: {auth: false, cors: {origin: ['*'], credentials: true}}
    },
    {
      method: 'GET', path: userId, handler: usersController.show,
      config: {auth: false, cors: {origin: ['*'], credentials: true}}
    },
    {
      method: 'PUT', path: userId, handler: usersController.update,
      config: {auth: false, cors: {origin: ['*'], credentials: true}}
    },
    {
      method: 'DELETE', path: userId, handler: usersController.destroy,
      config: {auth: false, cors: {origin: ['*'], credentials: true}}
    }
  ]);

  server.route([
    {
      method: 'GET', path: timesheets, handler: timesheetsController.index,
      config: {auth: false, cors: {origin: ['*'], credentials: true}}
    },
    {
      method: 'POST', path: timesheets, handler: timesheetsController.create,
      config: {auth: false, cors: {origin: ['*'], credentials: true}}
    },
    {
      method: 'GET', path: timesheetId, handler: timesheetsController.show,
      config: {auth: false, cors: {origin: ['*'], credentials: true}}
    },
    {
      method: 'PUT', path: timesheetId, handler: timesheetsController.update,
      config: {auth: false, cors: {origin: ['*'], credentials: true}}
    },
    {
      method: 'DELETE', path: timesheetId, handler: timesheetsController.destroy,
      config: {auth: false, cors: {origin: ['*'], credentials: true}}
    }
  ]);

  server.route([
    {
      method: 'GET', path: timeunits, handler: timeunitsController.index,
      config: {auth: false, cors: {origin: ['*'], credentials: true}}
    },
    {
      method: 'POST', path: timeunits, handler: timeunitsController.create,
      config: {auth: false, cors: {origin: ['*'], credentials: true}}
    },
    {
      method: 'GET', path: timeunitId, handler: timeunitsController.show,
      config: {auth: false, cors: {origin: ['*'], credentials: true}}
    },
    {
      method: 'PUT', path: timeunitId, handler: timeunitsController.update,
      config: {auth: false, cors: {origin: ['*'], credentials: true}}
    },
    {
      method: 'DELETE', path: timeunitId, handler: timeunitsController.destroy,
      config: {auth: false, cors: {origin: ['*'], credentials: true}}
    }
  ]);

  return next();
};

exports.register.attributes = {
  name: 'user-routes',
  version: '0.0.1'
};
