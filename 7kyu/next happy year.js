// Scenario

// You're saying good-bye your best friend , See you next happy year .

// Happy Year is the year with only distinct digits , (e.g) 2018

// Task

// Given a year, Find The next happy year or The closest year You'll see your best friend 

// Notes

// Year Of Course always Positive .
// Have no fear , It is guaranteed that the answer exists .
// It's not necessary that the year passed to the function is Happy one .
// Input Year with in range (1000  ≤  y  ≤  9000)
// Input >> Output Examples:

// nextHappyYear (7712) ==> return (7801)
// Explanation:

// As the Next closest year with only distinct digits is 7801 .

// nextHappyYear (8989) ==> return (9012)
// Explanation:

// As the Next closest year with only distinct digits is 9012 .

// nextHappyYear (1001) ==> return (1023)
// Explanation:

// As the Next closest year with only distinct digits is 1023 .

function nextHappyYear(year) {
    let happyYear = (digits) => digits.some(digit => {
        for (let i = 0; i < 4; i++) {
            //console.log(i, digit, digits.indexOf(digit))
            if (digits.indexOf(digit) !== i) {
                result = digit === digits[i];
                if (result === true) {
                    //console.log(result)
                    return result
                }
            }
        }
    })
    for (i = year + 1; i <= 9999; i++) {
        //console.log(i)
        let digits = String(i).split("")
        if (happyYear(digits) !== true) {
            return i
        }
    }
}

console.log(nextHappyYear(2001));