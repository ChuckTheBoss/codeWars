//parameters //returns //example // pseudo-code
//Parameters: a string of lowercase letters and spaces
//Returns: a single number totaling all vowels
//Example: abracadabra --> 5
//Psudo-code: Split string, total all values that are equal to a e i o u and return. 



// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowels = 0;
    str.split("").forEach(letter => {
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            vowels += 1;
        } else {
            vowels += 0;
        }
    })
    return vowels;
}

console.log(getCount("abracadabra"))