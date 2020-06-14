// render logger

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`My name is ${this.name} and i am ${this.age}`);
  }
}

// module.exports = Person;

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log(`Called listener`, data));

logger.log('Hello World');
logger.log('New message');
