/* eslint-disable prettier/prettier */
const arr = 'Hello'.split('');
console.log(arr);
console.log('slice:', arr.slice(1, 2))
console.log('splice:', arr.splice(1, 2))
console.log('now:', arr)
console.log('includes', arr.includes('o'));

const nums = [1, 2, 3, 4, 5];
console.log('reduce:', nums.reduce((prev, item) => prev + item, 0));
export { };
