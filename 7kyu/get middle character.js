//parameters, returns, example, pseudo code

//Parameters: A string, always at least one and up to 1000 characters. 
//Returns: Return a string of the middle or two middle characters. 
//Example: getMiddle("test") // "es"
//Pseudo code: length of string, divide by two (floor and ceil) and subtract one to get the middle letter(s).

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

//NOT FINISHED

function getMiddle(s) {
    let word = s.split("");
    const middle1 = word[Math.floor(s.length / 2)];
    const middle2 = word[Math.ceil(s.length / 2)];
    return s.length % 2 == 0 ? `${middle1}${middle2}` : middle1
}

console.log(getMiddle("test"))