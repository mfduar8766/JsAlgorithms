function findDuplicates(number) {
    const numberArray = number.sort((num1, num2) => {
        return num1 === num2;
    });

    for (let i = 0; i <= numberArray.length; i++) {

        if (i === numberArray[i]) {
            return i;
        }
    }
}
console.log(findDuplicates([1, 2, 3, 3, 4, 5, 6, 6, 7, 8]));
console.log(findDuplicates([1, 2, 3, 4, 4]));
console.log(findDuplicates([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 11]));


//hasOwnProperty: Checks if a key exists.
function duplicateNumber(numberArray) {
    let duplicateObject = {};

    for(let num of numberArray)  {

        if(duplicateObject.hasOwnProperty(num)) {
            return num;
        }

        duplicateObject[num] = num;
    }

    return -1;
}
console.log(duplicateNumber([2,3,4,5,6,6,7,8]));