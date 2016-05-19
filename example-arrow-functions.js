 var  names = ['Jon', 'Annie', 'Jen'];    // ** Arrow function vs anonymous function.
//
// names.forEach(function (name) {    // go through each element of array and applies this function; this is anonymous
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {    // arrow function
//   console.log('arrowfunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Jonathan'));

// var person = {  // example of anonymous function.  It doesn't work
//   name: 'Jonathan',
//   greet: function () {
//     names.forEach(function (name) {
//       console.log(this.name + ' says hi to ' + name) // "this" refers only inside function
//     });
//   }
// };
//
// var person = {  // example of arrow function.  this works.
//   name: 'Jonathan',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name) // "this" refers to person
//     });
//   }
// };
//
//
// person.greet();

// Challenge Area
//Anonymous function
function add (a,b) {
  return a+b;
};
//
// console.log(add(1,3));
// console.log(add(9,0));

// addStatement = for multiple lines
var addStatement = (a, b) => {
  return a + b;
};

console.log(addStatement(4,7));

// addExpression
var addExpression = (a, b) => a + b;
console.log(addExpression(3, -2));

// var add = (a, b) => a + b;
// console.log(add(1,3));
//
// var sum = {
//   a: 5,
//   b: 4,
//   add: function () {(a, b) => {console.log(a + b)}};
// }
