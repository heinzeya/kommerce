class CustomError extends Error {
    constructor(name, message, extra) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.title = name;
        this.detail = extra?.message;
    }
}
class MethodNotAllowedError extends Error {
    constructor(extra) {
        super('method-not-allowed');
        Error.captureStackTrace(this, this.constructor);
        this.status = 405;
        this.error = 'method-not-allowed';
        this.title = 'Method Not Allowed';
        this.detail = `Allowed method only ${extra}`;
    }
}
class QueryError extends Error {
    constructor(extra) {
        super('query-validation-error');
        Error.captureStackTrace(this, this.constructor);
        this.status = 400;
        this.error = 'bad-request';
        this.title = 'Invalid input parameters';
        this.detail = extra?.message || 'Invalid input parameters were provided';
        this.extraDetail = extra?.details;
    }
}
class UnauthorisedUserError extends Error {
    constructor(extra) {
        super('unauthorised-user');
        Error.captureStackTrace(this, this.constructor);
        this.status = 401;
        this.error = 'failed-to-provide-valid-token';
        this.title = 'Unauthorized User Error';
        this.detail = extra?.message || 'API authentication failed';
        this.extraDetail = extra?.details;
    }
}
class NotFoundError extends Error {
    constructor(extra) {
        super('not-found-error');
        Error.captureStackTrace(this, this.constructor);
        this.status = 404;
        this.error = 'not-found-error';
        this.title = 'Resource Not Found';
        this.detail = extra?.message || 'The requested resource was not found';
    }
}

class InternalServerError extends Error {
    constructor(extra) {
        super('internal-server-error');
        Error.captureStackTrace(this, this.constructor);
        this.status = 500;
        this.error = 'internal-server-error';
        this.title = 'Internal Server Error';
        this.detail = extra?.message || 'The server encountered an internal error';
    }
}
module.exports = {
    CustomError,
    MethodNotAllowedError,
    NotFoundError,
    QueryError,
    UnauthorisedUserError,
    InternalServerError,
};
