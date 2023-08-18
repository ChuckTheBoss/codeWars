// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.



// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true


// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let newMagazine = magazine;
    ransomNote.forEach(letter => {
        for (i = 0; i < newMagazine.length; i++) {
            if (letter == newMagazine[i]) {
                newMagazine = splice.newMagazine(i, 1)
                console.log(newMagazine);
                answer = true;
            }
        }
    });
    return true
};

console.log(canConstruct("aa", "aab"))

//partially complete