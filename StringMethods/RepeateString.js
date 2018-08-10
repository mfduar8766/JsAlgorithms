/*
.repeat():  constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
*/
const repeateString = (str, num) => {

    if(num < 0) {
        return '';
    }
    else if(num >= 0) {
        return str.repeat(num);
    }
};

console.log(repeateString('ab', 3));
console.log(repeateString("*", 3));
console.log(repeateString("abc", -2));
console.log(repeateString("abc", 0));

const repeate = (str, num) => {
    let repeateStr = '';

    while(num > 0) {
        repeateStr += str;
        num--;
    }
    return repeateStr;
};
console.log(repeate('ab', 3));
console.log(repeate('ab', -3));
console.log(repeate('ab', 0));

const repeateString2 = (str, num) => {
    let repeatedStr = '';

    while(num > 0) {
        repeatedStr += str;
        num--;
    }
    return repeatedStr;
};

console.log(repeateString2('abc', 5));