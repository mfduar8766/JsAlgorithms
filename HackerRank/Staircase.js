function staircase(n) {
    var emptyString, stair, hash;

    for(var i=0; i<n; i++) {
        emptyString = n-1-i;
        hash = i+1;
        stair = ' '.repeat(emptyString) + '#'.repeat(hash);
        console.log(stair)
    }
}
staircase(6);