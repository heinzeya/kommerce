const http = require('http');
const https = require('https');
const logger = require('../server/utils/logger');
const createApp = require('../server/App');
require('dotenv').config();

(async () => {
    try {
        const app = await createApp();
        const port = process.env.PORT || 3000;

        http.globalAgent.maxSockets = 20;
        https.globalAgent.maxSockets = 20;

        app.listen(port, () => {
            logger.info(`Listening on port ${port}`);
        });
    } catch (e) {
        logger.error(e.message, 'unable to initialize application:');
        process.exit(1);
    }
})();
