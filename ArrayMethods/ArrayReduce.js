/*
.reduce(): accepts 2 values the accumulator: acc and current 
    The acc is the value that will be accumulated and the the current is the next index value in the array
    .reduce() itirates through an array and reduces all the values into one
    let arr = [1, 2, 3, 4];
    arr.reduce((acc, current) => acc + current);
    This returns [1 + 2 + 3 + 4] = 10
*/

const sumAllValues = (arr) => {
    return arr.reduce((acc, current) => acc + current);
};

console.log(sumAllValues([5, 5, 5, 5]));

const multiplyAllValues = (arr) => {
    return arr.reduce((acc, current) => acc * current);
};

console.log(multiplyAllValues([5, 5, 5, 5]));


const addAdjacentProduct = (arr) => {
    return arr.slice(0, -1).reduce((acc, current, i) => Math.max(acc, current, arr[i + 1]), - Infinity);
};

console.log(addAdjacentProduct([3, 6, -2, -5, 7, 3]));

const flattentArray = (arr) => {
    return arr.reduce((acc, current) => acc.concat(current));
};

console.log(flattentArray([[0, 1], [2, 3], [4, 5]]));


let duplicate = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
const removeDuplicates = (arr) => {
    let unique_array = [];
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i]);
        }
    }
    return unique_array
};

console.log(removeDuplicates(duplicate));