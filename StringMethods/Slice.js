/*
.slice(): extracts a section of a string and returns it as a new string, without modifying the original string.
.slice(): extracts from the starting index up to  and excludes the ending index
    let str = 'This is a string';
    let num = 4;
    console.lo(str.slice(0, num)); This will return index [0,1,2,3] and exclude 4.
*/
let str = 'This is a string';
let num = 4;
console.log(str.slice(0, num));

const truncadeString = (str, num) => {
    //#1: Create a variable to hold string
    let trunc = str;
    //#2: IF trunc is greater than num return trunc AND slice it at index 0 to num
    if(trunc.length > num) {
        //This returns the string at index 0 up to and excluding 1
        return trunc.slice(0, num) + '...';
    }
};

console.log(truncadeString('a-', 1));