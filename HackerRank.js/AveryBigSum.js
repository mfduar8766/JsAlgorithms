function aVeryBigSum(ar) {
    var currentArray = ar;
    var newArray = currentArray.reduce((prev,curr) => prev+curr);
    return newArray;
}
aVeryBigSum([2,2,2,2]);