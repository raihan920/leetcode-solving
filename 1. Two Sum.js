//way 1
//O(n^2)
// var twoSum = function(nums, target) {
//     let myArr = [];
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){            
//             if(nums[i]+nums[j] == target){
//                 myArr.push(i, j);
//             }
//         }
//         console.log(myArr);
//         console.log(nums[i]);
//     }
//     console.log(myArr);
// };

// way 2

var twoSum = function(nums, target) {
    let myMap = {};
    for(let i=0; i<nums.length; i++){

        let value = nums[i];

        let complementPair = target-value;

        if(myMap[complementPair] !== undefined){    //this means the complementPair exists
            return [myMap[complementPair], i];
        }else{
            myMap[value] = i;
            // console.log(value);
            // console.log(myMap[value]);
            // console.log(count);
        }
    }
};

let nums = [5,2,7,11,15,4,3];
let target = 9;

console.log(twoSum(nums, target)); 