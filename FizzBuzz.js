function fizzBuzz(number) {

    if (number % 3 === 0 && number % 5 === 0) {
        return "Fzz Buzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return "";
    }
}
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));

function fizzBuzz2(number) {

    let word = '';

    if (number % 3 === 0) {
        word = word.concat('Fizz');
    }
    if (number % 5 === 0) {
        word = word.concat('Buzz');
    }
    return word;
}
console.log(fizzBuzz2(3));
console.log(fizzBuzz2(5));
console.log(fizzBuzz2(15));