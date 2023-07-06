// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//PREP
//Parameters: A string, including upper and lower case and symbols
//Results: A string, including upper and lower case and symbols but with "aeiou" removed
//Example: "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//Pseudo code: I could use array methods but I think I will use replace all 

function disemvowel(str) {
    let disemvowel = str.replaceAll("a", "")
    disemvowel = disemvowel.replaceAll("A", "")
    disemvowel = disemvowel.replaceAll("e", "")
    disemvowel = disemvowel.replaceAll("E", "")
    disemvowel = disemvowel.replaceAll("i", "")
    disemvowel = disemvowel.replaceAll("I", "")
    disemvowel = disemvowel.replaceAll("o", "")
    disemvowel = disemvowel.replaceAll("O", "")
    disemvowel = disemvowel.replaceAll("u", "")
    disemvowel = disemvowel.replaceAll("U", "")
    return disemvowel;
}

console.log(disemvowel("This website is for losers LOL!"));

//geez, that's really bad optimization. Let's try it so we only have to iterate once. 

function disemvowelOPT(str) {
    let strArray = str.split("")
    let disemvowel = []
    strArray.forEach(letter => {
        if (letter.toLowerCase() !== "a" && letter.toLowerCase() !== "e" && letter.toLowerCase() !== "i" && letter.toLowerCase() !== "o" && letter.toLowerCase() !== "u") {
            disemvowel.push(letter)
        }
    });
    return disemvowel.join("");
}

console.log(disemvowelOPT("This website is for losers LOL!"));

//There, now we're only going over the array once instead of array.length times! 