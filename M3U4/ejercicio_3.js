
var alumnos = [

    {
  
      nombre: 'Juan Gomez',
  
      nota: 7
  
    }, {
  
      nombre: 'Pedro Rodriguez',
  
      nota: 4
  
    }, {
  
      nombre: 'Roxana García',
  
      nota: 8
  
    }, {
  
      nombre: 'Luciano Lopez',
  
      nota: 5
  
    }, {
  
      nombre: 'Fernanda Gimenez',
  
      nota: 6
  
    }, {
  
      nombre: 'Florencia Martinez',
  
      nota: 10
  
    }, {
  
      nombre: 'Raul Sanchez',
  
      nota: 7
  
    }, {
  
      nombre: 'Sandra Figueroa',
  
      nota: 8
  
    }
  
  ];


function alumnos_aprobados() {

    console.log(alumnos);
    
    const aprobados = alumnos.filter(alumnos => alumnos.nota >= 7);
    
    console.log(aprobados);
   
    document.getElementById('resultado_nombre_1').innerHTML = aprobados[0].nombre;
    document.getElementById('resultado_nota_1').innerHTML = aprobados[0].nota;

    document.getElementById('resultado_nombre_2').innerHTML = aprobados[1].nombre;
    document.getElementById('resultado_nota_2').innerHTML = aprobados[1].nota;

    document.getElementById('resultado_nombre_3').innerHTML = aprobados[2].nombre;
    document.getElementById('resultado_nota_3').innerHTML = aprobados[2].nota;
   
    document.getElementById('resultado_nombre_4').innerHTML = aprobados[3].nombre;
    document.getElementById('resultado_nota_4').innerHTML = aprobados[3].nota;

    document.getElementById('resultado_nombre_5').innerHTML = aprobados[4].nombre;
    document.getElementById('resultado_nota_5').innerHTML = aprobados[4].nota;
    
} 


alumnos_aprobados();