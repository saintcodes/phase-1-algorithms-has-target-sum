function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }
  return false;

// //alternative solution
// function hasTargetSum(array, target) {
//   //creating an object to push seen numbers to
//   const seenNumbers = {};

//   //iterating through each number of array
//   for (const number of array) {
//   //matching to see if the complement number is equal to target minus current array number
//     const complement = target - number;
//   //checking if any key in object is our complement, if so return true
//     if (complement in seenNumbers) return true;
//   // otherwise, add that number to seenNumbers object
//     seenNumbers[number] = true;
//   }
//   return false;
// }


  ///below code does not work
  // const randomNum1 = array[Math.floor(Math.random() * array.length)]
  // const randomNum2 = array[Math.floor(Math.random() * array.length)]
  // if (randomNum1 + randomNum2 === target) {
  //   return true
  // } else {
  //   return false
  // }
}

/* 
  Write the Big O time complexity of your function here
    Runtime: O(n^2)
    quadratic as we have loops within loops. as array increases, runtime will increase
    Space: 0(n)

  */

/* 
  Add your pseudocode here
  take the sum of one random number + another random number (but not the same as first number)
  if total sum should equal to target, return true
  else return false
  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
