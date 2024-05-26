class User {
  constructor(name) {
    this.name = name;
  }
}

class Car {}

const user = new User('Keven');
const user2 = new User('Jose');

const car = new Car();
const usuario = 'Keven';

console.log(User instanceof Object);
console.log(user instanceof User);
console.log(car instanceof User);
console.log(car instanceof Car);
console.log(typeof car === 'object');

if (typeof usuario === 'string') {
  console.log('String...');
}

if (typeof usuario === 'number') {
}

if (usuario.trim()) {
  console.log('Tem Usuário.');
} else if (usuario === 'keven') {
  console.log('Não tem usuário.');
} else {
  console.log('...');
}

console.log(usuario.toUpperCase());
console.log(usuario.toLowerCase());
console.log(usuario.charAt(0));
console.log(usuario.substring(0, 3));
