function returnNumber(str) {
    const digitArray = ['1', '2', '3', '4', '5',
     '6', '7', '8', '9', '10'];
    
    return digitArray.includes(str);
}
console.log(returnNumber(''));