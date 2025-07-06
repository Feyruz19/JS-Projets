// 1.
// function getArrayBounds(arr) {
//     if (!Array.isArray(arr)) {
//         return null;
//     }

//     return [arr.length, arr[0], arr[arr.length - 1]];
// }

// console.log(getArrayBounds([]));
// console.log(getArrayBounds([1, 2, 3, 4]));
////////////////////////////////////////////////////
//2
// function getSum(arr) {
//     if (!Array.isArray(arr)) {
//         return null;
//     }

//     return arr.reduce((sum, num) => sum + num, 0)
// }
// console.log(getSum([]));
// console.log(getSum([1, 2, 3, 4]));
////////////////////////////////////////////////////
//3
// function getSpecialNumbers(m, n) {
//     if (!Number.isInteger(m) || !Number.isInteger(n)) {
//         return null;
//     }
//     let result = []
//     const start = m < n ? m : n
//     const end = n > m ? n : m;

//     for (let i = start; i <= end; i++) {
//         if (i % 3 === 0) {
//             result.push(i)
//         }
//     }
//     return result;
// }

// console.log(getSpecialNumbers(1, 10));
// console.log(getSpecialNumbers(20,10));
//////////////////////////////////////////////////////
//4.
// function swap(arr) {
//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     const len = arr.length;

//     if (len <= 1) {
//         let copy = [];
//         for (let i = 0; i < len; i++) {
//             copy[i] = arr[i];
//         }
//         return copy;
//     }
//     let newArr = [];

//     for (let i = 1; i < len; i++) {
//         newArr[i - 1] = arr[i];
//     }

//     newArr[len - 1] = arr[0];
//     return newArr;
// }
// console.log(swap([1, 2, 3, 4]));    
// console.log(swap(['a', 'b', 'c'])); 

//////////////////////////////////////////////////////////
//6.
// function getSpecialNumbers(arr) {
//     if (!Array.isArray(arr)) {
//         return null;
//     }

//     return arr.filter(num => num % 3 === 0)
// }
// console.log(getSpecialNumbers([3,13,5,7,12,6]))
////////////////////////////////////////////////////////
//7.
// function sortDesc(arr) {
//     if (!Array.isArray(arr)) {
//         return null
//     }

//     return [...arr].sort((a, b) => b - a)
// }
// console.log(sortDesc([8,1,11,9,3,5]))
////////////////////////////////////////////////////////
//9.
// function getMessagesForBestStudents(allStudents, failedStudents) {
//     if (!Array.isArray(allStudents) || !Array.isArray(failedStudents)) {
//         return null;
//     }

//     return allStudents
//         .filter(student => !failedStudents.includes(student))
//         .map(student => `Good job, ${student}`);
// }
// console.log(getMessagesForBestStudents(['a', 'b', 'c', 'd'], ['b', 'd'])); 