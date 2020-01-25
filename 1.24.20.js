// map

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);

console.log(doubled); // [2, 4, 6, 8]

// filter

const evens = numbers.filter(item => item % 2 === 0);

console.log(evens); // [2, 4]

const students = [
  { name: "Quincy", grade: 96 },
  { name: "Jason", grade: 84 },
  { name: "Alexis", grade: 100 },
  { name: "Sam", grade: 65 },
  { name: "Katie", grade: 90 }
];

const studentGrades = students.filter(student => student.grade >= 90);
console.log(studentGrades);
console.log(JSON.stringify(studentGrades));

// [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]

// Reduce

const sum = numbers.reduce(function(result, item) {
  return result + item;
}, 0);
console.log(sum); // 10

var pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

var petCounts = pets.reduce(function(obj, pet) {
  if (!obj[pet]) {
    obj[pet] = 1;
  } else {
    obj[pet]++;
  }
  return obj;
}, {});

console.log(petCounts);

/*
Output:
 { 
    dog: 2, 
    chicken: 3, 
    cat: 1, 
    rabbit: 1 
 }
 */

//1) merge the following dataset and display the unique combination of name, place, age
// arr1 => [{name: "bhavya", age: "30"}, {name: "daivik", age: "20"}, {name: "bhavya", age: "20"}, {name: "debbie", age: "35"}, {name: "Ann", age: "25"}]
// arr2 => [{name: "debbie", place: "FL"}, {name: "daivik", place: "NJ"}, {name: "Gnan", place: "NJ"}, {name: "bhavya", place: "CA"}]
// output => // arr1 => [{name: "bhavya", age: "30", place: "CA"}, {name: "daivik", age: "20", place: "NJ"}, {name: "Gnan", age: null, place: "NJ"}, {name: "debbie", age: "35", place:"FL"}, {name: "Ann", age: "25", place: null}]

var arr1 = [
  { name: "bhavya", age: "30" },
  { name: "daivik", age: "20" },
  { name: "bhavya", age: "20" },
  { name: "debbie", age: "35" },
  { name: "Ann", age: "25" }
];

var arr2 = [
  { name: "debbie", place: "FL" },
  { name: "daivik", place: "NJ" },
  { name: "Gnan", place: "NJ" },
  { name: "bhavya", place: "CA" }
];

var arr3 = arr1.map((name, i) => Object.assign({}, name, arr2[i]));

var narr = arr1.concat(arr2);
var length = arr1.length;

var merged = [];

for (var i = 0; i < arr1.length; i++) {
  merged.push({
    ...arr1[i],
    ...arr2[i]
  });
}

console.log(merged[0]);

/*for (var i = 0; i < length; i++) {
    if (arr1[i].name === arr2[i].name) {
      narr[i] = arr1.concat(arr2);
    }
  }*/

//console.log(arr3[0]);

//2) to display name, age, place in different font sizes on each button click.
//font sizes should be random on each click and should not be repeated with the previous or next size.
// font sizes input: [2,6,10,14,1,8]
