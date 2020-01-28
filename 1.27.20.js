// Removing duplicates from an array of objects

var test = [
  {
    id: 1,
    PlaceRef: "*00011",
    Component: "BATH",
    SubLocCode: "BAT",
    BarCode: ""
  },
  {
    id: 2,
    PlaceRef: "*00022",
    Component: "BAXI10R",
    SubLocCode: "KIT",
    BarCode: ""
  },
  {
    id: 1,
    PlaceRef: "*00011",
    Component: "BATH",
    SubLocCode: "BAT",
    BarCode: ""
  },
  {
    id: 3,
    PlaceRef: "*00011",
    Component: "ANR190",
    SubLocCode: "B1",
    BarCode: ""
  }
];

test = Array.from(new Set(test.map(JSON.stringify))).map(JSON.parse);

console.log(test);
console.log(JSON.stringify(test));

// 1. Write a custom method to replace the string "The quick brown fox jumps over the lazy dog"
//    with the string "The1 quick2 brown3 fox4 jumps5 over6 the7 lazy8 dog9"

var str = "The quick brown fox jumps over the lazy dog";
var nstr = str.split(" ");
var arr = [];

for (var i = 0; i < nstr.length; i++) {
  arr[i] = nstr[i].concat(i + 1);
}

arr = arr.join(" ");

console.log(str);
console.log(arr);

// 2. Using a single line of code, reverse the order of words in the string below:
//    var dwarves = "bashful doc dopey grumpy happy sleepy sneezy"

var dwarves = "bashful doc dopey grumpy happy sleepy sneezy";
var array = dwarves
  .split(" ")
  .reverse()
  .join(" ");

console.log(dwarves);
console.log(array);

// 3. Write a function that takes a number (from 1 to 12) and
//    return its corresponding month name as a string.

var month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function number(num) {
  if (num >= 1 && num <= 12) {
    return month[num - 1];
  } else {
    return "Enter a number from 1 to 12";
  }
}

console.log(number(1));
console.log(number(-6));
console.log(number(12));

// 4. Write a regular expression that matches any string containing at least one digit.

console.log(/\d/.test("ABC"));
console.log(/\d/.test("ABC1"));

// 5. Write a function that returns true if two arrays are identical, and false otherwise.

var a1 = [1, 2, 3, 4];
var a2 = [1, 2, 3, 4];

function identical(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  } else {
    var count = 0;
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        count++;
      }
    }
    if (count === arr1.length) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(identical(a1, a2));
