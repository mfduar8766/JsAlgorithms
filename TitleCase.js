function capFirstLetter(str) {
    let array = [];
    let sepetate = str.split(' ');

    for (let i = 0; i < sepetate.length; i++) {
        array.push(sepetate[i][0].toUpperCase() + sepetate[i].slice(1));
    }
    return array;
}
console.log(capFirstLetter('this is a word'));

function titleCase(str) {
    let capsTitle = str.split(' ');

    capsTitle = capsTitle.map((word) => {
        const letter = word
            .charAt(0)
            .toUpperCase();

        word = letter.concat(word.slice(1, word.length));
        return word;
    });

    capsTitle = capsTitle.join(' ');

    return capsTitle;
}
console.log(titleCase('this is a string'));

//------------------------------- TitlE Case 2 --------------------------//
function titleCase(str) {

    //#1: Lowercase the string.
    str = str.toLowerCase()
    //#2: Split the string at each individual word.
        .split(' ')
    //#3: MAP through the string and assign a paramater to do so.
        .map(function (letter) {
            //#4: Replace the zeroith index of each word [0] with a uppercase letter.
            return letter.replace(letter[0], letter[0].toUpperCase());
        });
    //#5: Join the string back together where they were split.
    return str.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));

function titleCase2(str) {
    str = str
        .toLowerCase()
        .split(' ')
        .map(function (letter) {
            return letter.replace(letter[0], letter[0].toUpperCase());
        })

    return str.join(' ');
}

console.log(titleCase2("This IS A STRING THAT NEEDS TO BE CHANGED."));
console.log(titleCase2("This IS A STRING THAT NEEDS TO BE CHANGED."));
console.log(titleCase2("This IS A STRING THAT NEEDS TO BE CHANGED."));
