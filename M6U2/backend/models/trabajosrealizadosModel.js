var pool = require('./bd');

async function getTrabajosrealizados() {

    var query = 'select * from trabajos_realizados';
    var rows = await pool.query(query);
    return rows;
}


// modificar / update

async function getTrabajosrealizadosById(id) {

    var query = "select * from trabajos_realizados where id = 6 ";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarTrabajosrealizadosById(obj, id) {
    try {
        var query = "update trabajos_realizados  set ? where id=6";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}


module.exports = { getTrabajosrealizados, getTrabajosrealizadosById, modificarTrabajosrealizadosById }
