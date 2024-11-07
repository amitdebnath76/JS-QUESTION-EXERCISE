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
// const isPowerOfTwo= (num)=>{
//     // let op = false
//     for(let i =1;i<num; i++){
//         if(2**i===num){
//             return true
//         }
       
//     }
//     return false
// } 
// console.log(isPowerOfTwo(7))
// console.log(isPowerOfTwo(8))
// console.log(isPowerOfTwo(12))


// EX-15--write a function to calculate the sum of square of all element in an array.
// const sumOfSquare = (arr) =>{
//    let newArr=  arr.map((element) => element*element)
//    let sum = 0;
//    for(i of newArr)
//     sum = sum+i
//    return sum

// }
// console.log(sumOfSquare([1,2,3,4,5,78]))

// EX--16  Write a function findMin that takes an array of number as input and returns the min value of this array.
// const findMin = (arr)=>{
//    let newArr = arr.sort((a,b)=>a-b)
//    return newArr[0]
// }
// console.log(findMin([25,23,81,12,4,45,46]))
// console.log(findMin([25,23,-81,12,-4,45,46]))

// Ex-17-write a function to convert a string to camelcase and  snake-case

// const toCamelCase =(str)=>{

//    Snake case//
//    let newStr = str.toLowerCase().split(' ').join("_")
//    return newStr

//    Camel Case///
//    str = str.split(' ');
//       str = str.map((word,index)=>{
//       if(index ===0){
//         return word.toLowerCase()
//       }else{
//          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//       }
//    })
//     return str.join('')

// }
// console.log(toCamelCase('hello WorLD'))
// console.log(toCamelCase('wev development is not easy'))

// EX-18---write a function to check if a cheracter is upper case or lowercase

// const chechAlpha = (char)=>{
//    if(char === char.toUpperCase()){
//       return("Charter is Uppercase")
//    }
//    return ('Charter is Lowercase')
// }
// console.log(chechAlpha('a'))
// console.log(chechAlpha('B'))

// EX--19---Write a function to check if a given string starts with a spefic substring
// const checkSubStr = (str, subStr)=>{
//    let newStr = str.toLowerCase().split(' ')
//    console.log(newStr)
//    if(subStr.toLowerCase() === newStr[0]){
//       return true
//    }
//    return false
// }
// console.log(checkSubStr('Hello Programer', 'Hello'));
// console.log(checkSubStr('Hello Programer', 'Program'));
// console.log(checkSubStr('program for Hello Programer', 'Program'));
// console.log(checkSubStr('have you win yet', 'Have'));

// Ex-20---Write a function that takes an array as an input,output will be reverse string, but you can not use built in method or function to solve this problem


// const reverseString = (str) =>{
//    let output_str = ''
//    for (let i = str.length -1 ; i >=0;i--){
//     output_str = output_str + str[i]
//       console.log(str[i])
//    }
//      return  output_str
// }
// console.log(reverseString('Bangladesh'))


// EX-21--Write a function called calculateMean that takes an array of number as input and return the mean of those number.

// const calCulateMean = (arr)=>{
//   let mean = 0; 
//   if (arr.length===0){
//     return 0
//   }
// for (let i of arr){
//   // console.log(i)
  
//  mean = mean + i
 
// }
// return mean/arr.length
// }
// console.log(calCulateMean([1,12,14,15,18,120]))
// console.log(calCulateMean([]))

// Alternative---21
// const calCulateMean = (arr)=>{
//   if (arr.length===0){
//     return 0
//   }
// let sum =  arr.reduce((a,b)=> a+b,0)
//   return sum/arr.length
// }
// console.log(calCulateMean([1,12,14,15,18,120]))
// console.log(calCulateMean([]))

// ///////------
// const user = {
//   fristName: "Anushka",
//   getName(){
//     const fristName = 'Rai';
//     return this.fristName
//   }
// }
// console.log(user.getName())

// EX----23
const numbers = [1,2,2,3,1,2,3,4,4]
let counts = {}
for(let element of numbers){
  counts[element] = (counts[element] || 0) +1 
}
console.log(counts)