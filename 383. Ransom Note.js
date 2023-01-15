var canConstruct = function(ransomNote, magazine) {
    let ransomObj = Object.assign([], ransomNote);
    let magazineObj = Object.assign([], magazine);

    const hashMap = {};
    let returnVal = true;

    for(let elm_note in ransomObj){
        let myChar = ransomObj[elm_note];

        if(myChar in hashMap){
            hashMap[myChar] += 1; 
        }else{
            hashMap[myChar] = 1; 
        }
    }

    for(let elm_magazine in magazineObj){
        let myChar2 = magazineObj[elm_magazine];
        if(myChar2 in hashMap){
            hashMap[myChar2] -= 1; 
        }        
    }

    for(let elm in hashMap){        
        if(hashMap[elm] > 0){
            returnVal =  false;
        }
    }
        
    return returnVal;
};

let ransomNote = "aa";
let magazine = "aab"

console.log(canConstruct(ransomNote, magazine));