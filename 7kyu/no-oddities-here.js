// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.
//Parameters: an array of integers
// Returns: an array of even integers in the order given
// Example: 0,1 // 0 
// Pseudo code: determine if number is divisible by 2, return that number if true. 

function noOdds(values) {
    return values.filter(value => value % 2 == 0)
}

console.log(noOdds([0, 1, 2, 3]))