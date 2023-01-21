var reverseStr = function(s, k) {
    let arr = s.split('');  //string to arrary conversion
    for(let i=0; i<arr.length; i+=2*k){
        let start = i;
        let end = Math.min(start+k-1, arr.length-1); //end will be that is lesser
        console.log(start);
        console.log(end);

        while(start<end){
            let temp = arr[start];            
            arr[start++] = arr[end];
            arr[end--] = temp;
            console.log(arr);
        }
        
    }
    
    console.log(arr.join(''));
    return arr.join('');
  
};

let s = "abcdefghij";
let k = 3;

reverseStr(s, k);