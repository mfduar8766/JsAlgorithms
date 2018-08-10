//Write a function that returns the century based on the given year.
function centuryFromYear(year) {
    let century = year/100;

    return Math.ceil(century);
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
console.log(centuryFromYear(1988));
console.log(centuryFromYear(2001));


function centuryFromYear2(year) {
    return Math.round((year + 49)/100);
}

console.log(centuryFromYear2(1905));
console.log(centuryFromYear2(1700));
console.log(centuryFromYear2(1988));
console.log(centuryFromYear2(2001));


function centuryFromYear3(year) {
    //1: Get the remainder of the year divided by 100.
    let remainder = year % 100;
    //2: IF remainder = 0 return year/100 ELSE return year - remainder + 100/100
   return remainder == 0 ? year/100 : (year - remainder + 100)/100;
}

console.log(centuryFromYear3(1905));
console.log(centuryFromYear3(1700));
console.log(centuryFromYear3(1988));
console.log(centuryFromYear3(2001));