// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

Courtesy of projecteuler.net
*/

// function solution(number) {
//   let result = 0;
//   while (number-- > 0) {
//     if (number % 5 === 0 || number % 3 === 0)
//       result += number;
//   }
//   return result;
// }

solution=n=>(a=~~(--n/3),b=~~(n/5),c=~~(n/15),(3*a*(a+1)+5*b*(b+1)-15*c*(c+1))/2)
