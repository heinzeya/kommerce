require('dotenv').config();

module.exports = {
    project: {
        name: 'kommerce',
    },
    backend: {
        database: {
            client: 'pg',
            pool: {
                min: 1,
                max: 100,
            },
            owner: {
                user: process.env.DBUSER,
                password: process.env.DBPASS,
            },
            configReadWrite: {
                max: 20, // set pool max size to 20
                idleTimeoutMillis: 10000, // close idle clients after 10 seconds
                connectionTimeoutMillis: 10000, // return an error after 10 secs if connection could not be established
                maxUses: 7500, // close (and replace) a connection after it has been used 7500 times
                applicationName: 'bond_readWrite', // Name that will appear on  connection when client use it.
                host: process.env.DBHOST,
                port: process.env.DBPORT,
                database: process.env.DBNAME,
                ssl: !(process.env.DBHOST.includes('localhost')),
            },
        },
    },
};
