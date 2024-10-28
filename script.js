// Ex-01

// let numOne = 12;
// let numTwo = 15;
// const sum = numOne + numTwo;
// console.log(sum)
// Ex----02
// const chechTraiangleType = (a,b,c)=>{
//     if (a===b && b===c){
//         return "equletere"
//     };
//     if (a===b || b===c ||a===c){
//         return "leterel"
//     };
//     return "byleterel"
// }
// console.log(chechTraiangleType(3,5,6))
// console.log(chechTraiangleType(3,3,3))
// console.log(chechTraiangleType(3,6,3))

// EX-06
// const checkPolindrom = (str)=>{
//     let input = str.toLowerCase();
//     let r_str = input.split('').reverse().join('')
//     if (str === r_str){
//         return true
//     }
//     return false
// }

// console.log(checkPolindrom('backcab b'))
// console.log(checkPolindrom('backcab'))

// Ex-06--recheck

// const isPolindrom = (str)=>{
//     let newString = str.toLowerCase();
//     let r_str  = newString.split('').reverse().join('');
//     if (newString = r_str){
//         return true
//     }
//     return false
// }
// console.log(isPolindrom('baab'))

// EX-07
// const findMax = (arr)=>{
//     let newArr = arr.sort((a,b)=>b-a);
//     return newArr[0]
// }
// console.log(findMax([1,2,31,18,70,61]))
// console.log(findMax([-12,-25,-46,-13,-78,-98,-8]))

// Ex-07--Part two
// const findMax = (arr)=>{
//     let newArr = arr.map((a,b)=> b-a)
//     return newArr[0]
// }
// console.log(findMax([12,25,46,13,78,98,8]))
// console.log(findMax([-12,-25,-46,-13,-78,-98,-8]))

//EX-08 (Finding factorial of a number)
// const calculateFactorial =(number)=>{
//     let fect = 1;
//     for(let i =1;i<=number;i++){
//         // console.log(i)
//         fect = fect * i;
//     }
//     return fect
// }
// console.log(calculateFactorial(5))
// console.log(calculateFactorial(10))
// console.log(calculateFactorial(0))

// Ex-09--calculating average of an array
// const calculateAverage =(arr)=>{
//     let count = 0;
//     for(let i of arr){
//         count = count +i
//         console.log(count)
//         // let ave = ;

//     }
//     return (count / arr.length)
// }
// console.log(calculateAverage([1,2,3,4,5,6]))

// Ex---10 checking two array--are they equal.

// const arrayAreEqual = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   return arr1.every((currentVal, index) => currentVal === arr2[index]);
// };
// console.log(arrayAreEqual([1, 2, 3], [2, 3, 4]));
// console.log(arrayAreEqual([1, 2, 3], [1, 2, 3]));
// console.log(arrayAreEqual([1, 2, 3], [1, 3, 2]));

// Ex--10--2nd part(In React, you might use every() to check if all required fields in a form are filled out before allowing a user to submit.)
// const formFields = [
//   { name: "username", value: "JohnDoe" },
//   { name: "email", value: "johndoe@example.com" },
//   { name: "password", value: "" },
// ];

// const allFieldsFilled = formFields.every((field) => field.value !== "");
// console.log(allFieldsFilled);

// Ex-11---User put an interzer value, write a function that can calculate the sum of input value

// const sumOfInput = (value)=>{
//     let newValue = Array.from(String(value),Number)
//     console.log(newValue)
//    return newValue.reduce((a,b) => a+=b)
// }

// console.log(sumOfInput(123456))

// EX-12 --Remove duplicate of an array---also return a new array--
// const removeDuplicate = (arr)=>{
//     let newArray = [...new Set(arr)];
//     return newArray.sort((a,b)=> a-b)

// }
// console.log(removeDuplicate([1,2,3,14,5,6,1,27,33,18]))
// console.log(removeDuplicate([1,21,3,4,54,6,1,2,3,18]))

// Ex--13---write a function that takes a strings,if the string element match with any vowel element count the total number of string will match
// const countVowel = (str)=>{
//     const vowel = ['a','e','i','o','u']
//     let newStr = str.toLowerCase().split('');
//     let count = 0
//     for(char of newStr){
//         if(vowel.includes(char)){
//             count++
//         }
       
//     }
//     return count
 
// }
// console.log(countVowel('Bangladesh'))
// console.log(countVowel('I am learning front end Web development '))


// EX--14--write a function that takes a number,check if the number is equal to power of 2 return true,else false
const isPowerOfTwo= (num)=>{
    for(let i =1;i<num; i++){
        if(2**i===num){
            return true
        }
        return false
    }
} 
console.log(isPowerOfTwo(7))
console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(12))