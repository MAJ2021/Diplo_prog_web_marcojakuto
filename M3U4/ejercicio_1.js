function color(var1) {
    if (var1 == "1") {
        console.log("realizo click sobre botón rojo");
        document.getElementById("fondo").style.background = "red";
        document.getElementById("cuadrado_1").style.background = "greenyellow";
    }

    if (var1 == "2") {
        console.log("realizo click sobre botón celeste");
        document.getElementById("fondo").style.background = "rgb(4, 162, 253)";
        document.getElementById("cuadrado_2").style.background = "tomato";

    }

    if (var1 == "3") {
        console.log("realizo click sobre botón amarillo");
        document.getElementById("fondo").style.background = "yellow";
        document.getElementById("cuadrado_3").style.background = "green";
    }

    if (var1 == "4") {
        console.log("realizo click sobre botón default");
        document.getElementById("fondo").style.background = "gray";
        document.getElementById("cuadrado_1").style.background = "red";
        document.getElementById("cuadrado_2").style.background = "rgb(4, 162, 253)";
        document.getElementById("cuadrado_3").style.background = "yellow";

    }
    console.log("realizo click ");

}





