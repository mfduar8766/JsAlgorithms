function findingLongestStr(str) {
    let splitStr = str.split(' ');
    let longestWord = 0;
    
    for(let i = 0; i < splitStr.length; i++) {
        if(splitStr[i].length > longestWord) {
            longestWord = splitStr[i].length;
        }
    }
    return longestWord;
}
console.log(findingLongestStr("Google is a word"));
console.log(findingLongestStr("This sentence has a long word in it with x character"));




function longestWordLength(str) {
    let longestLength = 0;
    let strArray = str.split(' ');

    for(let i=0; i < strArray.length; i++) {
         if(longestLength < strArray[i].length) {
            longestLength = strArray[i].length;
        }
    }

    return longestLength;
}
console.log(longestWordLength('Google is a word'));




function longestLesngthWord(str) {
    let word = str.split(' ');
    longestWordIs = 0;

    for(let i=0; i < word.length; i++) {
        longestWordIs = longestWordIs < word[i].length ? word[i].length : longestWordIs;        
    }
    return longestWordIs;
}
console.log(longestLesngthWord('Google is a word'));




function longestWordTwo(str) {
    let longest = 0;
    arrayOfWords = str.split(' ');

    arrayOfWords.forEach(word => {
        longest = longest < word.length ? word.length : longest;                
    });

    return longest;
}
console.log(longestWordTwo('Google is a word'));




function sortLongestWord(str) {
    let longestLengthOFWord = str.split(' ').sort((word1, word2) => {
        return word2.length - word1.length;
    })[0].length;

    return longestLengthOFWord;
}
console.log(sortLongestWord('Google is a word'));
console.log(sortLongestWord('America is a long word'));