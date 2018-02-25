let str = "CodefightsIsAwesome";
let res = str.match(/[A-Z][^A-Z]*/g).map(word => word.toLowerCase()).join(" ");
console.log(res);

function seperateWords(str) {
    let strArray = str.split(' ');

    for(let i=0; i<strArray.length; i++) {

        if(strArray[i] !== strArray[i].toLowerCase()) {
            strArray[i] = strArray[i].toLowerCase();
            strArray.splice(i,  0, ' ');
        }
    }

    strArray = strArray.join("").trim();
    
    return strArray

}
console.log(seperateWords('CodefightsIsAwesome'));