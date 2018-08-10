/*
.from(): Allows you to create an array from array like objects
*/
const array = Array.from('dog');
console.log(array);

/*
.Array.of(): method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
*/
console.log(Array.of(6));

/*
.concat(): method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
*/
let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
console.log(arr1.concat(arr2));

/*
.entries(): returns a new Array Iterator object that contains the key/value pairs for each index in the array.
*/
let currentArray = [1,2,3,4,5];
let itirator = currentArray.entries();
for (let i of itirator) {
    console.log(i);
}