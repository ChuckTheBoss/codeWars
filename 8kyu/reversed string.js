// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
    let reversedStr = [];
    for (i = str.length - 1; i >= 0; i--) {
        reversedStr.push(str[i]);
    }
    return reversedStr.join("");
}

console.log(solution("world"));

// function solution(str){
//     return str.split('').reverse().join('');  
// }