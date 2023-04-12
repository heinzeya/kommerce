const express = require('express');

const { errorHandler } = require('../utils/errorHandlers');
const customErrors = require('../utils/customErrors');

const router = express.Router();

const testApplicationHealth = async (req, res) => res.status(200).end('200 OK');

router.route('/heartbeat')
    .get(testApplicationHealth)
    .all((req, res, next) => next(errorHandler(req, res, new customErrors.MethodNotAllowedError(['GET']))));

module.exports = {
    heartbeatRouter: app => app.use('/', router),
};
