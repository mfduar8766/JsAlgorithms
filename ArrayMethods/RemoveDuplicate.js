let duplicate = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
const removeDuplicates = (arr) => {
    let unique_array = [];
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i]);
        }
    }
    return unique_array
};

console.log(removeDuplicates(duplicate));