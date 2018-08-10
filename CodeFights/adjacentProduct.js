const adjacentProduct = (input) => {
    let number = Number.NEGATIVE_INFINITY;
    //#1: Itirate through array and excludde the last element
    for(let i=0;i<input.length-1;i++){
        //#2: Comppare the product of each current element with the next element of the largest one found so far
        if(input[i]*input[i+1] > number){
          number = input[i]*input[i+1];
        }
    }
  return number;
};

console.log(adjacentProduct([3, 6, -2, -5, 7, 3]));

const adjacentProduct2 = (arr) => {
    //#1: Itirate through array srtarting at 0 and exclude the last element: -1
    //Use .slice() to return a copy of a portion of the array into a new array
    return arr.slice(0, -1)
    //#2: Use .recude() to itirate through the array 
    //#3: Use Math.max() to add up the total of the multiplied numbers and return the largest number
    //Subtract from infinity.
    .reduce((acc, current, i) => Math.max(acc, current * arr[i + 1]), -Infinity);
};

console.log(adjacentProduct2([3, 6, -2, -5, 7, 3]));

const adjacentProduct3 = (arr) => {
    return arr.slice(0, -1).reduce((acc, current, i) => Math.max(acc, current, arr[i + 1]), - Infinity);
};

console.log(adjacentProduct3([3, 5, -8, 12, -21, 13]));