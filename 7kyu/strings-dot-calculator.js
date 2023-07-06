// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)

// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

// Examples (Input => Output)

// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""

//Parameters: A string of dots, one or two operator symbols, and more dots. 
//Returns: a string of dots. 
//Examples (see above)
//Pseudo code: Split string into three sections, the first section of dots, the operator, and the second section. Count dots in first and third sections. Operate based on those numbers, print a string of dots of that number. 

function dotCalculator(equation) {
    let num1 = equation.split(" ")[0].length
    let num2 = equation.split(" ")[2].length
    let operator = equation.split(" ")[1]
    if (operator == "+") {
        result = num1 + num2
    } else if (operator == "-") {
        result = num1 - num2
    } else if (operator == "//") {
        result = num1 / num2
    } else if (operator == "*") {
        result = num1 * num2
    }
    resultInDots = ".".repeat(result)
    return resultInDots;
}

console.log(dotCalculator("..... - ..."))
console.log(dotCalculator("..... + ..............."))