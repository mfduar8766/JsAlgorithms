function compareTriplets(a, b) {
    var newArray = [];
    var alice = a;
    var bob = b;
    var aliceScore = 0;
    var bobScore = 0;

    for (var i = 0; i < 3; i++) {
        if (alice[0] < bob[0] || alice[0] > bob[0]) {
            bobScore = 1;
            aliceScore = 1;
        }
        if (alice[1] > bob[1] || alice[1] < bob[1]) {
            bobScore = 1;
            aliceScore += 1;
        }
    }
    newArray.push(aliceScore, bobScore);
    return newArray;
}
compareTriplets([17, 28, 30], [99, 16, 8]); //2 1
compareTriplets([5, 6, 7], [3, 6, 10]); //1 1