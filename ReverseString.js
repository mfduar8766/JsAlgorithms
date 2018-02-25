function reverseString(string) {
    return string.split("").reverse().join("");
}
console.log(reverseString('codegod'));

function reverseWord(word) {
    let reversedWord = word.split('').reverse().join('');
    return reversedWord;
}
console.log(reverseWord('codegod'));

function reverseString2(word) {
    let reversedWord2 = '';

    for (let i = word.length - 1; i>=0; i--) {
        reversedWord2 += word[i];
    }

    return reversedWord2;
}
console.log(reverseString2('codegod'));