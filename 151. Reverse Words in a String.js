var reverseWords = function(s) {
    let myStr = '';
    let myArr = s.split(' ');
    
    for(let i=myArr.length-1; i>=0; i--){        
        if(myArr[i]==''){
            continue;
        }        
        if(myStr.length > 0){           
            myStr += ' ';
        }
        myStr += myArr[i];        
    }    
    return myStr;
};

s = "   the    sky is   blue  "; 
console.log(reverseWords(s));