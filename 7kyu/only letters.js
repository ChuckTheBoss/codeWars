// Let's assume we need "clean" strings. Clean means a string should only contain letters a-z, A-Z and spaces. We assume that there are no double spaces or line breaks.

// Write a function that takes a string and returns a string without the unnecessary characters.

// Examples

// removeChars('.tree1')    ==> 'tree'

// removeChars("that's a pie$ce o_f p#ie!")  ==> 'thats a piece of pie'

// removeChars('john.dope@dopington.com')    ==> 'johndopedopingtoncom'

// removeChars('my_list = ["a","b","c"]')    ==> 'mylist  abc'

// removeChars('1 + 1 = 2')    ==> '    ' (string with 4 spaces)

// removeChars("0123456789(.)+,|[]{}=@/~;^$'<>?-!*&:#%_")  ==> '' (empty string)

function removeChars(s) {
    splitSentence = s.split("");
    let letters = lettersOnly(splitSentence);
    console.log(letters.join(""))
    return letters.join("")
}

function lettersOnly(array) {
    lettersArray = [];
    array.forEach(letter => {
        if (letter === "a" ||
            letter === "b" ||
            letter === "c" ||
            letter === "d" ||
            letter === "e" ||
            letter === "f" ||
            letter === "g" ||
            letter === "h" ||
            letter === "i" ||
            letter === "j" ||
            letter === "k" ||
            letter === "l" ||
            letter === "m" ||
            letter === "n" ||
            letter === "o" ||
            letter === "p" ||
            letter === "q" ||
            letter === "r" ||
            letter === "s" ||
            letter === "t" ||
            letter === "u" ||
            letter === "v" ||
            letter === "w" ||
            letter === "x" ||
            letter === "y" ||
            letter === "z" ||
            letter === " " ||
            letter === "A" ||
            letter === "B" ||
            letter === "C" ||
            letter === "D" ||
            letter === "E" ||
            letter === "F" ||
            letter === "G" ||
            letter === "H" ||
            letter === "I" ||
            letter === "J" ||
            letter === "K" ||
            letter === "L" ||
            letter === "M" ||
            letter === "N" ||
            letter === "O" ||
            letter === "P" ||
            letter === "Q" ||
            letter === "R" ||
            letter === "S" ||
            letter === "T" ||
            letter === "U" ||
            letter === "V" ||
            letter === "W" ||
            letter === "X" ||
            letter === "Y" ||
            letter === "Z") {
            lettersArray.push(letter)
        }
    })
    return lettersArray
}

removeChars('.tree1') //   ==> 'tree'

removeChars("that's a pie$ce o_f p#ie!") // ==> 'thats a piece of pie'

removeChars('john.dope@dopington.com') //   ==> 'johndopedopingtoncom'

removeChars('my_list = ["a","b","c"]')  //  ==> 'mylist  abc'

removeChars('1 + 1 = 2')   // ==> '    ' (string with 4 spaces)

removeChars("0123456789(.)+,|[]{}=@/~;^$'<>?-!*&:#%_")  //==> '' (empty string)

//solution with regex, but I ain't doing that right now:

function removeChars(s) {
    return s.replace(/[^a-z ]/ig, "")
}