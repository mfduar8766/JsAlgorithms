function sumOfDigits(str) {
    const nums = str.match(/\d+/g);
    let sum = 0;

    nums.forEach((num) => {
        sum += Number(num);
    });

    return nums;
}
console.log(sumOfDigits(' 2 apples and 12 oranges'));
