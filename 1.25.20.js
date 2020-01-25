// Linear Search

function linearSearch(values, target) {
  var length = values.length;
  for (var i = 0; i < length; i++) {
    if (values[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([1, 2, 3, 4, 5], 3));
console.log(linearSearch([1, 2, 3, 4, 5], 5));
console.log(linearSearch([1, 2, 3, 4, 5], 8));

// Bubble Sort

function bubbleSort(values) {
  var length = values.length;
  var i, j, temp;
  for (i = 0; i < length; i++) {
    for (j = 0; j < length - i - 1; j++) {
      if (values[j] > values[j + 1]) {
        temp = values[j];
        values[j] = values[j + 1];
        values[j + 1] = temp;
      }
    }
  }
  console.log("Sorted Array: ", values);
}

bubbleSort([5, 4, 3, 2, 1]);
bubbleSort([4, 5, 2, 1, 3]);
bubbleSort([9, 7, 8, 6, 5]);

// 1. Write a function that will return the maximum value in a numeric array

function maximum(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maximum([5, 9, 12, 4, 7]));

// 2. Write a function to test if a string is a palindrome

function palindrome_test(str) {
  var count = 0;
  var half = Math.floor(str.length / 2);
  if (str.length % 2 === 1) {
    for (var i = 0; i < half; i++) {
      if (str[i] === str[str.length - 1 - i]) {
        count++;
      }
    }
    if (count === half) {
      console.log("The given string is a palindrome");
    } else {
      console.log("The given string has odd length but is not a palindrome");
    }
  } else {
    console.log("The given string has even length and cannot be a palindrome");
  }
}

palindrome_test("abcba");
palindrome_test("abc");
palindrome_test("abcd");
