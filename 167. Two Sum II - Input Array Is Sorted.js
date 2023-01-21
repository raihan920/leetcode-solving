var twoSum = function(numbers, target) {
    let myMap = {};

    for(let i=0; i<numbers.length; i++){

        let value = numbers[i];
        let complementPair = target-value;

        if(myMap[complementPair] !== undefined ){ //this means already exists in the hashmap
            return [myMap[complementPair]+1, i+1];

        }else{
            myMap[value] = i;
        }
    }

};


let nums = [5,2,7,11,15,4,3];
let target = 9;
console.log(twoSum(nums, target));