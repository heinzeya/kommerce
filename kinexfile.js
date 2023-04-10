// Update with your config settings.
require('dotenv').config();
const path = require('path');
const {
    backend: {
        database: {
            client,
            configReadWrite: {
                max,
                idleTimeoutMillis,
                connectionTimeoutMillis,
                maxUses,
                applicationName,
                host,
                port,
                database,
                ssl,
            },
            pool,
            owner: {
                user,
                password,
            },
        },
    },
} = require('./config/index');

const env = process.env.NODE_ENV || 'production';

const knexConfig = {};

knexConfig[`${env}`] = {
    client,
    pool,
    connection: {
        host,
        port,
        user,
        password,
        database,
        ssl,
        max,
        idleTimeoutMillis,
        connectionTimeoutMillis,
        maxUses,
        applicationName,
    },
    migrations: {
        tableName: '_migrations',
        directory: path.join(__dirname, '/deploy/db/migrations/pg'),
    },
    seeds: {
        directory: path.join(__dirname, '/deploy/db/seeders/pg'),
    },
};

module.exports = knexConfig;
