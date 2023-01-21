/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let str = "";
    console.log(columnNumber);
    while(columnNumber>0){
        // console.log(columnNumber);
        // console.log()

        //as 26%26 = 0 -> this is the case for 'A' as 65+0 = 65
        //as 25%26 = 25 -> as the highest remainder, so it should be used for 'Z'
        let char = String.fromCharCode(65+(columnNumber-1)%26); //65 is the ascii value of 'A'
        console.log(char);
        console.log(str);
        str = char+str;
        console.log(str);
        //we have to subtract 1 to match with the ascii code and character        
        columnNumber = Math.floor((columnNumber-1)/26);
    }
    return str;
};

console.log(convertToTitle(701)); //n th column

// console.log(Math.floor(.444));
// console.log(String.fromCharCode(65+(10-1)))