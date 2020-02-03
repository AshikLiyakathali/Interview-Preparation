// for in = 11223313  output should be  o = two one's, two two's, two three's, one one, one three
// let num = [112213]; give this as input or 
// input = 11223313 // o = 2122231113 let r = "11122344555" let o1= 3122132435
// let output = [21221113]; this should be the output for a given input. 
// What is the time and space complexity.

function counter(num) {
    num = num.toString();
    var count = 0;
    var arr = [];

    function same(a, i) {
        if (a[i] === a[i + 1]) {
            count++;
            same(a, i + 1);
        }
        return count;
    }

    for (var i = 0; i < num.length; i++) {
        if (num[i] != num[i + 1]) {
            count = 1;
            arr.push(count, num[i]);
            count = 0;
        } else {
            same(num, i)
            arr.push(count + 1, num[i]);
            i = i + count;
            count = 0;
        }
    }
    arr = arr.toString().replace(/,\s?/g, "");
    return arr;
}

console.log(counter(112213));
console.log(counter(11223313));
console.log(counter(11122344555));

// time complexity is : N*log( N )
// space complexity is: O(N)