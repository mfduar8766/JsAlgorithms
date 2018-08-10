function isPalinDrome(str) {

    /*
        The RegExp \W
        \W: Removes ALL non alphanumeric characters.
        \W: Matches any non word character.
        \W: Matches ANYTHING that is not enclosed in the brackets.

    */
    let forwardStr = str.toLowerCase().replace(/[\W_]/g, '');
    let reverseStr = forwardStr.split('').reverse().join('');

    return forwardStr === reverseStr;
}
console.log(isPalinDrome("A man, a plan, a canal. Panama."));
console.log(isPalinDrome("My age is 0, 0 si ega ym,"));
console.log(isPalinDrome("This is a palimdrome."));


function checkPalinDrome(str) {
    //Reg Exp
    /*
        [^A-Z]: Matches anything that is NOT enclosed between A-Z 
        [^a-z]: Matches anything that is NOT enclosed between q-z 
        [^0-9]: Matches anything that is NOT enclosed between 0-9 
        [^_]: Matches anything that is NOT enclose _ 
        g: Is a global flag used to check the entire string that is being used.
    */
    //#1: Use toLowerCase() to return all lower case strings.
    //#2: Use replace() to replace the values in the string with new ones.
    let forwardString = str.toLowerCase().replace(/[^A-Za-z0-9_]/g, '');
    //#3: Use the split method to seperate the string into an array of individual strings.
    //#4: Use reverse() to reverse the string the first becomes last and the last becomes first.
    //You want to split the current string, reverse it and re join() the string to see if its the same. 
    let reverseString = forwardString.split('').reverse().join('');

    return forwardString === reverseString;
}

console.log(checkPalinDrome("A man, a plan, a canal. Panama."));
console.log(checkPalinDrome("My age is 0, 0 si ega ym,"));
console.log(checkPalinDrome("This is a palimdrome."));


const isPalinDrome2 = (str) => {
    let forwardStr = str.toLowerCase().replace(/[\W_]/g,'');
    let reverseStr = forwardStr.split('').reverse().join('');
    return forwardStr === reverseStr;
};

console.log(isPalinDrome2('A man, a plan, a canal. Panama.'));