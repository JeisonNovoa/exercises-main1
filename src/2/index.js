const usuario1 = {
  nombre: 'juan',
  edad: 34,
};

const usuario2 = {
  nombre: 'Daniel',
  edad: 30,
};

const usuario3 = {
  nombre: 'Carlos',
  edad: 21,
};

// TODO:
// 1. Calcular la suma de las edades de todos los usuarios (e imprimirla)
// 2. Calcular el promedio de las edades de todos los usuarios (e imprimirla)
//
// El resultado deberia ser:
// 1. 85
// 2. 28.33
function suma(Us1, Us2, Us3){
  return Us1.edad + Us2.edad + Us3.edad;
}
let sumaTotal = suma(usuario1,usuario2,usuario3);

function promedio(){
  return sumaTotal /3;
}
let prom = promedio();
console.log(`el suma total de las edades son ${sumaTotal} y el promedio de las edades es ${prom}`);