const truncateString = (str, num) => {
    let trunc = str;

    if(trunc.length > num) {
        return trunc.slice(0,num) + '...';
    } else {
        return str;
    }
}

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString('A-',1));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Absolutely Longer", 2));

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));