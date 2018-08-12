function miniMaxSum(arr) {
    var currentArray = arr;
    var min = currentArray.slice(0,4);
    var max = currentArray.slice(1,5);
    
    var minTotal = min.reduce((prev,curr) => prev+curr);
    var maxTotal = max.reduce((prev,curr) => prev+curr);
    
    console.log(minTotal + ' ' +  maxTotal);
}
miniMaxSum([1, 2, 3, 4, 5]);