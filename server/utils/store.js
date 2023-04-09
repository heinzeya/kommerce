require('dotenv').config();
const knex = require('knex');

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
} = require('../../config/index');

const knexClient = knex({
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
});

module.exports = knexClient;
