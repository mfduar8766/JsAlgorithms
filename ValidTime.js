function validTime(time) {
    let actualTime = time.split(':');
    
    if (Number(actualTime[0]) > 23) {
        return false;
    } else if(Number(actualTime[1] > 59)) {
        return false;
    }
    return true;
}
console.log(validTime('24:00'));
console.log(validTime('23:00'));
console.log(validTime('4:00'));
console.log(validTime('2:40'));