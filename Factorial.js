function factorial(number) {
    
    if (number === 0 || number === 1) {
        return 1;
    }

    for (let i = number - 1; i>=1; i--) {
        number *= i;
    }
    return number;
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(10));

function factorialize(number) {
    let product = 1;

    for (let i=1; i<=number; i++) {
        product *= i;
    }

    return product;
}
console.log(factorialize(0));
console.log(factorialize(5));
console.log(factorialize(4));
console.log(factorialize(3));
console.log(factorialize(10));