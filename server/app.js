const express = require('express');
const helmet = require('helmet');
const { heartbeatRouter } = require('./routers/heartbeat');

module.exports = async () => {
    const app = express();
    app.use(helmet({
        contentSecurityPolicy: {
            useDefaults: false,
            directives: {
                defaultSrc: ['\'self\'', '\'unsafe-inline\''],
                baseUri: ['\'self\''],
                fontSrc: ['\'self\'', 'https:', 'data:'],
                frameAncestors: ['\'self\''],
                imgSrc: ['\'self\'', 'data:'],
                objectSrc: ['\'none\''],
                scriptSrc: ['\'self\'', '\'unsafe-inline\''],
                scriptSrcAttr: ['\'self\'', '\'unsafe-inline\''],
                formAction: ['\'self\''],
            },
        },
    }));

    heartbeatRouter(app);
    return app;
};
