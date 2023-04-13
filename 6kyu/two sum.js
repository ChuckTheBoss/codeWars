// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

function twoSum(numbers, target) {
    let indecies = [];
    numbers.forEach(num => {
        let firstNum = num;
        numbers.forEach(num => {
            if (firstNum + num === target && numbers.indexOf(firstNum) !== numbers.lastIndexOf(num)) {
                indecies = [numbers.indexOf(firstNum), numbers.lastIndexOf(num)]
            }
        })
    });
    return indecies;
}


console.log(twoSum([1, 2, 3], 4)) // returns [0, 2] or [2, 0]
console.log(twoSum([368, -599, -978, -486, 334, -665, 366, 876, 2, 835, -983, -147, 227, -279, -504, -595, 936, 534, 587, -824, -962, -14, 365, 331, 296, 396, -992, -196, -294, -342, -914, 800, -186, 195, -955, -698, 9, -451, 33, -796, -103, 234, -878, -388, 569, 356, 900, 637, -6, 727, 459, 817, 87, 87, -407, -315, -307, -490, 304, -687, 513, 26, -591, -690, -231, 123, 515, -944, 154], -70))