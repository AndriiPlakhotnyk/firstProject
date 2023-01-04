import pg from "pg"
const pool = new pg.Pool({
    user: "postgres",
    password: '!anderplaxot!',
    host: "localhost",
    port: 5432,
    database: "cars"

})

export default pool