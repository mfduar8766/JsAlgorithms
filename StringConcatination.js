function presentFullName(first, last) {
    this.first = "Matt";
    this.last = "Duarte";
    return presentFullName;
}
console.log("Hello, my name is".concat(' ', first, ' ', last));

function introductionTwo(first, last) {
    const introduction = "Hi my name is".concat(' ', first, ' ', last);
    return introduction;
}
console.log(introductionTwo('Matt', 'Duarte'));

function presentName2(firstName, lastName) {
    const introduction2 = `Hello my name is ${firstName} ${lastName}`;
    return introduction2
}
console.log(presentName2('Matheus', 'Duarte'));