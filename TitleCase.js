function capFirstLetter(str) {
    let array = [];
    let sepetate = str.split(' ');

    for(let i=0; i<sepetate.length; i++) {
        array.push(sepetate[i][0].toUpperCase() + sepetate[i].slice(1));
    }
    return array;
}
console.log(capFirstLetter('this is a word'));

function titleCase(str)  {
    let capsTitle = str.split(' ');

    capsTitle = capsTitle.map((word) => {
        const letter = word.charAt(0).toUpperCase();

        word = letter.concat(word.slice(1, word.length));
        return word;
    });

    capsTitle = capsTitle.join(' ');

    return capsTitle;
}
console.log(titleCase('this is a string'));