function isPalinDrome(str) {
    let forwardStr = str.toLowerCase().replace(/[\W_]/g, '');
    let reverseStr = forwardStr.split('').reverse().join('');

    return forwardStr === reverseStr;
}
console.log(isPalinDrome("A man, a plan, a canal. Panama."));
console.log(isPalinDrome("My age is 0, 0 si ega ym,"));
console.log(isPalinDrome("This is a palimdrome."));