/* eslint-disable prettier/prettier */
const obj = {
  name: 'Wagner',
  age: 40,
  address: {
    city: 'Shanghai',
    nation: 'China'
  }
};
const secondObject = {};
Object.assign(secondObject, obj);
console.log('secondObject:', secondObject);
export { };
