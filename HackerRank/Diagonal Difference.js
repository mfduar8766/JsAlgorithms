function diagonalDifference(arr) {
    var array = arr;
    var left;
    var right;
    var total;
    //[11,2,4,4,5,6,10,8,-12]
    left = array[0]+array[4] + array[8];
    right = array[2]+array[4]+array[6];
   console.log(total = Math.abs(left-right));
}
diagonalDifference([
    11,2,4,4,5,6,10,8,-12
]); 