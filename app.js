// let input = "Hello, World!"

// const output = input.split('').reverse().join('')

// console.log(output)

// >>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<

// let arr = [1, 2, 3, 4, 5]

// const output = arr.reduce((acc, item) => acc + item, 0)

// console.log(output);

// >>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<

// function removeDuplicates(arr) {
//    arr.map((item, index) => {
//       for (let i = index + 1; i < arr.length; i++) {
//          if (item === arr[i]) {
//             arr.splice(i, 1);
//             i--;
//          }
//       }
//    });
//    return arr;
// }

// console.log(removeDuplicates([1, 2, 2, 3, 3, 3]));

// >>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<

// function fizzBuzz(n) {
//    if (n % 3 === 0 && n % 5 === 0) {
//       return "FizzBuzz";
//    } else if (n % 3 === 0) {
//       return "Fizz";
//    } else if (n % 5 === 0) {
//       return "Buzz";
//    } else {
//       return n;
//    }
// }
// console.log(fizzBuzz(6));

// >>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<

// function includes(value1, value2) {
//    return value1.split('').sort().join('') === value2.split('').sort().join('');
// }

// console.log(includes("listen", "silent"));

// >>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<

// function flatArray(data) {
//   let result = [];

//   data.forEach((item) => {
//     if (Array.isArray(item)) {
//       result = result.concat(flatArray(item));
//     } else {
//       result.push(item);
//     }
//   });

//   return result;
// }

// console.log(flatArray([1, [2, [3, 4], 5], 6]));

// >>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<

// function countWords(str) {
//   return str.split(" ").length;
// }

// console.log(
//   countWords("I am learning JavaScript") // 4
// );

// >>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<

// function longestWord(str) {
//   return str
//     .split(" ")
//     .reduce(
//       (longest, current) =>
//         current.length > longest.length ? current : longest,
//       ""
//     );
// }

// console.log(longestWord("Web development is amazing")); // "development"

// >>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<

// function capitalizeWords(str) {
//   return str
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// console.log(capitalizeWords("hello world i am here"));

// "Hello World I Am Here"

// >>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<

// function mostFrequentLetter(str) {
//   const freq = str.split("").reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
//   }, {});

//   return Object.keys(freq).reduce((a, b) => (freq[a] > freq[b] ? a : b));
// }

// console.log(mostFrequentLetter("javascript")); // "a"
