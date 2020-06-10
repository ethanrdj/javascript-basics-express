const createPerson = (name, age) => {
  const people = {name: name , age: age,};
  return people;
}; 

const getName = object => {
  return object['name'];
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(e => e.age);
};

const findByName = (name, people) => {
  return people.find(e => e.name === name);
};

const findHondas = cars => {
  return cars.filter(e => e.manufacturer === "Honda");
};

const averageAge = people => {
  return people.reduce((acc, e) => acc + e.age, 0) / people.length;
};

const createTalkingPerson = (name, age) => {
const person = {
  name: name,
  age: age,
  introduce () {
    return `Hi Fred, my name is ${this.name} and I am ${this.age}!`
  }
}; return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
