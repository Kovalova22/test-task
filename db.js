const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "helloworld",
    host: "localhost",
    port: 5432,
    database: "hotdogs",
    
});

module.exports = pool;