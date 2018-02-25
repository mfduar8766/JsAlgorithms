function largesttWord(str) {
    let filteredArray = str.replace(/[\W_]/g, ' ').split(' ');
    let largest = '';

    filteredArray.forEach((word) => {
        largest = word.length > largest.length ? word : largest;
    });

    return largest;
}
console.log(largesttWord('Google is a word'));