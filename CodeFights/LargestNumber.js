//Return the largest number from each array.
function largestOfFour(arr) {
    // #1: Map ALL items in the arrays into a new array & return the new array as the final array.
    return arr.map(function (group) {
        //#2: Reduce the contents of each inner array with the reduce() operator.
        return group.reduce(function (prev, current) {
            // #3: Create two paramaters to compare them against each other and return the
            // largest numbers in each set.
            return (current > prev)
                ? current
                : prev;
        });
    });
}

const largestOfFour2 = (arr) => {
    return arr.map((group) => {
        return group.reduce((prev, current) => {
            return (current > prev) ? current : prev;
        });
    });
};

const largestOfFour3 = (arr) => {
    return arr.map((group) => {
        return group.reduce((prev, current) => {
            return (current > prev) ? current : prev;
        });
    });
};

const largestOfFive = (arr) => {
    return arr.map((group) => {
        return group.reduce((prev, current) => {
            return (current > prev) ? current : prev;
        });
    });
};

console.log(largestOfFive([[4, 5, 1, 3, 1000],[13, 27, 18, 26, 2000],
[32, 35, 37, 39, 3000],[4000, 1001, 857, 1, 66], [0, 5000, 30, 4, 12]]));


