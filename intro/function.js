function foo() {}
const foo2 = () => {};
const foo3 = function () {};

function sum(x, y) {
  return x + y;
}

const sum2 = (x, y) => x + y;

const printName = (name) => console.log('User name is: ', name);

console.log(sum2(1, 2));

processUserInput(function (name) {
  console.log(name);
});

processUserInput((name) => console.log(name));
processUserInput(console.log);
