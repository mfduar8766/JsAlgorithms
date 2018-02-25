function repeatString(str) {
    let repeat = str;

    while (repeat === str) {
        repeat = str.concat(str);
    }

    return repeat;
}
console.log(repeatString('codingGod'));
console.log(repeatString('Google'));