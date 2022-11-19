const usuario = {
  nombre: 'Alberto',
  apellido: 'afasdf',
  edad: 21,
};

// TODO:
// 1. Arreglar el apellido del usuario ya que esta mal escrito, deberia ser 'Gomez'.
// 2. El usuario fue registrado hace 2 anos, a su edad se le deberian sumar 2 anos mas.

// Agregar codigo aqui para solucionar el problema
usuario.apellido = "Gomez";
usuario.edad += 2;
console.log(usuario);