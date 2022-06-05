
function borrar_texto() {

    document.getElementById("texto").value = "";

}

function get_id(id) {
    return document.getElementById(id).value;
}

function inner_html(id, result) {

    return document.getElementById(id).innerHTML = result;
}

function contar_caracteres() {

    setInterval(function () {
        var c = get_id("texto");
        inner_html("resultado",c.length);
    },0000);

}
contar_caracteres(); 