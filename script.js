 let arr = [-1, 2, 1, -4]
 let target = 1
 //let sum = [];
 let sum = 99999;

 // -4,-1,1,2
 arr = arr.sort((a, b) => {
   return a - b
 })

 function threeSum(arr, target) {
   // write your code here
   for (let i = 0; i < arr.length - 2; i++) {

     // 1. sum = -4-1+1 = -4
     //2. sum = -1+1+2 = 2
     console.log(arr[i], arr[i + 1], arr[i + 2])
     let smallestSum = Math.abs(arr[i] + arr[i + 1] + arr[i + 2] - target)
     if (sum > smallestSum) {
       sum = smallestSum
     }
     //sum.push(Math.abs(arr[i] + arr[i + 1] + arr[i + 2]- target))
   }
   return sum
 }
 // threeSum(arr, target)
 // console.log(sum)

 //threeSum(arr, target)
 
 //console.log(sum, Math.min(...sum))


module.exports = threeSum;
