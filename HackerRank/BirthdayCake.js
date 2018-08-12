function birthdayCakeCandles(ar) {
    var numberOfCandels = [];
    var candles = ar;
    var max;

    for(var i = 0; i<candles.length; i++) {
       max = Math.max.apply(null,candles);
       if(max>candles[i]) {
           numberOfCandels.push(max)
       }
    }    
   return numberOfCandels.length;
}
birthdayCakeCandles([3, 2, 1, 3]);
birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]);