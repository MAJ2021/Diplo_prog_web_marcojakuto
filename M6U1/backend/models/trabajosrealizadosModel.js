var pool = require('./bd');

async function getTrabajosrealizados() {

    var query = 'select * from trabajos_realizados';
    var rows = await pool.query(query);
    return rows;
}


module.exports = { getTrabajosrealizados }