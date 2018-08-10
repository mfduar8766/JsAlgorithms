/*
 .filter(): creates a new array with all elements that pass the test implemented by the provided function.
 .shift(): removes the first element from an array and returns that removed element. This method changes the length of the array.

    const findElement = (arr, func) => {
        #1: We filter the arrray by the function. This will return to us the modulous of 2
        #2: Use .shift() to remove any unneeded elements in the array
        return arr.filter(func).shift();
    };
*/

const findersKeepers = (arr, remainder) => {
    return arr.map((n) => {
        if(n % 2 === remainder) {
            return n;
        } else {
            return undefined;
        }
    });
};

console.log(findersKeepers([1, 3, 5, 8, 9, 10], 0 ));

const findElement = (arr, func) => {
    return arr.filter(func).shift();
};

  console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));