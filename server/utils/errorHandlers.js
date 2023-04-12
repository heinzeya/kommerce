const halson = require('halson');
const customErrors = require('./customErrors');
const { sendResponse } = require('./response');
const { contentType } = require('../../config/index');

const halError = (resourceUri, errorBody) => halson(errorBody).addLink('self', resourceUri);

const getErrorDetails = (err) => {
    if (err.name === 'ValidationError') {
        return new customErrors.QueryError(err);
    }
    return err;
};

const errorHandler = (req, res, err) => {
    const errorMsg = getErrorDetails(err);

    if (errorMsg) {
        sendResponse(
            res,
            contentType,
            (errorMsg.status || 500),
            halError(req.originalUrl, errorMsg),
        );
    }
};

module.exports = {
    errorHandler,
    getErrorDetails,
};
