let numbers = [2,5,3,1,4,7,10,15];

function findMissingNumbers(num) {
    let missingNumbersCount;
    let missingNumbers = [];

    num.sort(function(a,b) {
        return a - b;
    });

        for(let i=0; i<num.length; i++) {
            if(num[i+1] - num[i] != 1 && num[1+1] != undefined) {
                missingNumbersCount = num[i+1] - num[i] -1;
                for(j = 1; j <= missingNumbersCount; j++) {
                    missingNumbers.push(num[i] + j)
                }
            }
        }
        return missingNumbers;
}
console.log(findMissingNumbers(numbers));


function missingNumbers(numberArr) {
    const numberArray = numberArr.sort((num1, num2) => {
        return num1 - num2;
    });

    for(let i=0; i<numberArray.length; i++) {

        if(i !== numberArray[i]) {
            return i;
        }
    }
}
console.log(missingNumbers([1,3,5,7,9]));
console.log(missingNumbers([1,2,5,0,6,7,9,3,4]));