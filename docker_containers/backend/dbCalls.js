const mariadb = require("mariadb");

const pool = mariadb.createPool({
    host: "db",
    user: "root",
    password: "example",
    database: "joke_db",
});

const randomJoke = async function randomJoke() {
    let conn;
    try {
        conn = await pool.getConnection();
        const result = await conn.query(
            `SELECT jokes.joke
            FROM jokes
            WHERE jokes.status = "approved"
            ORDER BY RAND()
            LIMIT 1`
        );
        return result[0];
    } catch (error) {
        throw error;
    } finally {
        if (conn) {
            conn.release();
        }
    }
};

const submitJoke = async function submitJoke(joke, category, email) {
    console.log("submit joke", joke, category);
    let conn;
    try {
        conn= await pool.getConneciton();
        const result = await conn.query(
            `INSERT into jokes(
                joke,
                category,
                user_email)
            VALUES (?, ?, ?)`,
            [joke, category, email]
        );
        return result;
    } catch (error) {
        throw error;
    } finally {
        if (conn) {
            conn.release();
        }
    }
};

module.exports = {
    randomJoke,
    submitJoke,
};