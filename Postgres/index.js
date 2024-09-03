require('dotenv').config();

const { Pool } = require('pg');

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const pool = new Pool({
    host: PGHOST,
    database: PGDATABASE,
    username: PGUSER,
    password: PGPASSWORD,
    port: 5432,
    ssl: {
        require: true,
    },
});

// async function getPgVersion() {
//     const client = await pool.connect();
//     try {
//         const result = await client.query('SELECT version()');
//         console.log(result.rows[0]);
//     } finally {
//         client.release();
//     }
// }

// getPgVersion();


async function createTable() {
    const client = await pool.connect();
    try {
        const result = await client.query(`
            CREATE TABLE "User" (
                id SERIAL PRIMARY KEY,
                username VARCHAR(20) UNIQUE NOT NULL
            );
        `);
        console.log("Table 'User' created successfully.");
    } catch (error) {
        console.log(`Some error occurred while creating the table: ${error}`);
    } finally {
        client.release(); // Release the client back to the pool
    }
}

createTable();

