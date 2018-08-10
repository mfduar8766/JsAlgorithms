let flattenArray = function(arr) {
    let newArr = [];
    let currentArray = arr;

    currentArray.forEach(function(item){
        if(Array.isArray(item)) {
            newArr.push(...flattenArray(item))
        } else {
            newArr.push(item);
        }
    });
    return newArr;

}
console.log(flattenArray([1,2,[3,4,[5],6,[7]]]));