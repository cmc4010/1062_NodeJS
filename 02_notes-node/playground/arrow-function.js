var square = x => x * x;
console.log(square(9));

var user = {
  name: 'Andrew',
  sayHi: () => { // no 'this' binding and no arguments
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);
