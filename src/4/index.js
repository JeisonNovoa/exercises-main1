class Usuario {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
};

const usuarios = [
  new Usuario('Jaycee', 'Morar', 37),
  new Usuario('Jammie', 'Casper', 13),
  new Usuario('Clark', 'Reinger', 85),
  new Usuario('Kurtis', 'Feest', 33),
  new Usuario('Brian', 'Denesik', 52),
  new Usuario('Rachel', 'Botsford', 27),
  new Usuario('Fritz', 'Mante', 52),
  new Usuario('Eda', 'Watsica', 16),
  new Usuario('Margaretta', 'Buckridge', 31),
  new Usuario('Joel', 'Wehner', 69),
  new Usuario('Aiden', 'Murphy', 26),
  new Usuario('Felton', 'Thiel', 73),
  new Usuario('Emelie', 'McDermott', 92),
  new Usuario('Eunice', 'Crooks', 19),
  new Usuario('Roselyn', 'Johnston', 43),
  new Usuario('Kaleigh', 'Reynolds', 15),
  new Usuario('Russ', 'Rolfson', 52),
  new Usuario('Otho', 'Bauch', 83),
  new Usuario('Annalise', 'Stamm', 40),
  new Usuario('Johnathan', 'Lakin', 39),
  new Usuario('Ruthie', 'Bauch', 94),
  new Usuario('Rey', 'Ryan', 40),
  new Usuario('Magdalen', 'Keeling', 70),
  new Usuario('Jerrell', 'Schiller', 91),
  new Usuario('Deshaun', 'Bechtelar', 33),
  new Usuario('Jaycee', 'Powlowski', 31),
  new Usuario('Leanna', 'Mertz', 87),
  new Usuario('Esteban', 'Rolfson', 33),
  new Usuario('Roberto', 'Macejkovic', 87),
  new Usuario('Manuel', 'Lueilwitz', 40),
  new Usuario('Sincere', 'Satterfield', 63),
  new Usuario('Aimee', 'Runte', 45),
  new Usuario('Carlie', 'Romaguera', 99),
  new Usuario('Dewayne', 'Douglas', 64),
  new Usuario('Gia', 'Daniel', 15),
  new Usuario('Jessie', 'Fadel', 77),
  new Usuario('Laurence', 'McDermott', 54),
  new Usuario('Alvena', 'Boyer', 89),
  new Usuario('Danial', 'Graham', 70),
  new Usuario('Grady', 'Wolff', 40),
  new Usuario('Howell', 'Pacocha', 75),
  new Usuario('Benton', 'Mosciski', 68),
  new Usuario('Percival', 'Mraz', 88),
  new Usuario('Enola', 'Reynolds', 91),
  new Usuario('Edyth', 'Greenfelder', 70),
  new Usuario('Kaya', 'King', 35),
  new Usuario('Edward', 'Shanahan', 21),
  new Usuario('Neha', 'Kuhlman', 47),
  new Usuario('Hollie', 'Emmerich', 81),
  new Usuario('Zora', 'Johns', 10),
];

// TODO:
// 1. imprimir la suma de todas las edades de los usuarios
// 2. imprimir el promedio de las dedades de los usuarios
// 3. imprimir un arreglo de strings, con nombre y apellido de cada usuario
// 4. imprimir el promedio de la cantidad de caracteres que tienen todos los nombres
// 5. encuentre dos usuarios que tengan el nombre repetido
// 6. imprimir un arreglo de strings cuyo valor sea el email de cada usuario
//    el email de un usuario esta compuesto por la primera letra de su nombre, seguido de su apellido, seguido por '@empresa.com' y todo debe de estar en letras minuculas
// 7. contar cuantos usuarios tienen el apellido 'Reynolds'

/*punto 1 y 2*/
let suma = 0;
for(let i = 0; i<usuarios.length; i++){
  suma += usuarios[i].edad;
}
let prom = suma / usuarios.length;
console.log(`la suma de las edades es de ${suma} y el promedio es de ${prom}`);
console.log("///////////////////////////////////////////////////////////////////////////////////////////////");

///////////////////////////////////////////////////////////////////////////////////////////////
//Uso el metodo reduce para aplicar una formula a cada elemento y retornar el resultado
//y asi evitar hacer 2 for porque seria como elevar el arreglo al cuadrado O(n^2)
const suMa = usuarios.reduce((a,b) => a + b.edad,0);
alert(suMa/usuarios.length); 

///////////////////////////////////////////////////////////////////////////////////////////////
/*punto 3*/
for(i = 0; i < usuarios.length; i++){
  var usuarios2 = usuarios.slice();
  delete usuarios2[i].edad;
}
console.log(usuarios2);
console.log("///////////////////////////////////////////////////////////////////////////////////////////////");

///////////////////////////////////////////////////////////////////////////////////////////////
/*punto 4*/
let sumaCaracteres = 0,contador = 0;
for(i = 0; i<usuarios.length; i++){
  sumaCaracteres = sumaCaracteres + usuarios[i].nombre.length;
}
console.log(`el promedio de todos los caracteres del los nombres es de: ${sumaCaracteres/50} con un total de ${sumaCaracteres} caracteres en total`);
console.log("///////////////////////////////////////////////////////////////////////////////////////////////");

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*punto 5*/
//Uso el metodo reduce para aplicar una formula a cada elemento y retornar el resultado
//y asi evitar hacer 2 for porque seria como elevar el arreglo al cuadrado O(n^2)
const busqueda = usuarios.reduce((acc, persona) => {
  //antes del igual, la formula toma el dato de la posicion x del arrelgo y la tranforma a la clave del objeto
  //despues del igual lo que hace es que compara... si existe un valor en el objeto le suma 1, sino lo 
  //inicializa en 0
  acc[persona.nombre] = ++acc[persona.nombre] || 0;
  return acc;
}, {});
//Uso el metodo filter para filtrar los usuarios repetidos
const duplicados = usuarios.filter( (persona) => {
  //aqui retorno el valor de cada clave del objeto y si es 0 (false), significa que el usuario no se repitio
  //pero si es direferente 0 (true), significa que el usuario se ha repetido mas de una vez
	return busqueda[persona.nombre];
});
console.log(duplicados);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*punto 6*/
for (let i = 0; i < usuarios.length; i++) {
  console.log(`Correo usuario ${(i+1)}: ${usuarios[i].nombre[0].toLowerCase() + usuarios[i].apellido.toLowerCase() + "@empresa.com"}`);
}
console.log("///////////////////////////////////////////////////////////////////////////////////////////////");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*punto 7*/
let contador1 = 0;
for (i = 0; i < usuarios.length; i++) {
    if (usuarios[i].apellido == "Reynolds") {
        contador1++;
    }
}
console.log(`el apellido "Reynolds" se repite ${contador1} veces`);
// Nuevos ejercicios
// 8. imprimir los usuarios que tengan unicamente mas de 18 anos
// 9. crear un Objeto (o un Map) en el que la llave es el nombre, y el valor es la cantidad de usuarios con ese nombre
// 10. Imprimir el usuario que mas edad tiene (y el menor)
// 11. Imprimir el usuario que tiene el nombre + apellido mas largo

