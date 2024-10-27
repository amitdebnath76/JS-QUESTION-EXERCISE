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
const calculateAverage =(arr)=>{
    let count = 0;
    for(let i of arr){
        count = count +i
        console.log(count)
        // let ave = ;
        
    }
    return (count / arr.length)
}
console.log(calculateAverage([1,2,3,4,5,6]))