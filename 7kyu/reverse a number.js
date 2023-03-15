// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples

//  123 ->  321
// -456 -> -654
// 1000 ->    1

function reverseNumber(n) {

    string = String(n);
    if (string.startsWith("-")) {
        reversed = "-" + string.split("").reverse().join("").replaceAll("-", "").replaceAll("0", "");
    } else if (string == "0") {
        reversed = 0;
    } else {
        reversed = string.split("").reverse().join("").replaceAll("-", "").replaceAll("0", "");
    }
    return reversed;
}

console.log(reverseNumber(123))
console.log(reverseNumber(-456))
console.log(reverseNumber(1000))

//Would not work on codewars for some reason. I think they were using an old version of node where not all of the functions were usable. I'll have to figure that out in the future. 

function reverseNumber(n) {
    let isNegative = n < 0;
    let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
    let result = Number(reverseAsString);

    return isNegative ? -result : result;
}