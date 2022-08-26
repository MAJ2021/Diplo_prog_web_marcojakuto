var pool = require('./bd');

async function getNovedades() {

    var query = 'select * from novedades_1';
    var rows = await pool.query(query);
    return rows;
}

async function insertNovedades(obj) {
    try {
        var query = " insert into novedades_1 set ? ";
        var rows = await pool.query(query, [obj])
        return rows
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteNovedadesById(id) {

    var query = "delete from novedades_1 where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows;
}


// modificar / update

async function getNovedadById(id) {

    var query = "select * from novedades_1 where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarNovedadById(obj, id) {
    try {
        var query = "update novedades_1  set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}



module.exports = { getNovedades, insertNovedades, deleteNovedadesById, getNovedadById, modificarNovedadById }