//codewar questions and solutions.

/*1.
Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
*/
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let ages = [age1, age2, age3,age4,age5,age6,age7,age8];
    let squared = ages.map((elem) => elem * elem);
    let total = squared.reduce((previous,current) => previous + current,0);
    let sqrt = Math.sqrt(total);
    return Math.floor(sqrt/2);

}
/*
2. 
Your task is to write function factorial.
 */
function factorial(n){
    let count = n;
    if(count === 1 || count === 0) return 1;

    for(let i = 1; i < n; i++){
        count *= i;
    }

    return count;
}
/*
3. 
Write a small function that returns the values of an array that are not odd.
 */
function noOdds(values){
    return values.filter((elem) => elem % 2 === 0);
}
/*
4.
Count the number of divisors of a positive integer n. Random tests go up to n = 500000.
 */
function getDivisorsCnt(n){
    let divisorArr = [];
    for(let i = 0; i <= n; i++){
        if(n % i === 0){
            divisorArr.push(i);
        }
    }
    return divisorArr.length;
}
/*
5.
Your task is to make a function that can take any non negative int as an argument and return it with its digits in
descending order.
 */
function descendingOrder(n){
    n = n.toString();
    let arr = n.split('');
    let numArr = arr.map((elem) => +elem);
    let number = numArr.sort((a,b) => a-b).reverse().join('');
    return +number;
}
/*
6.
Given an array of numbers, return a new array of length of the 2nd parameter containing the last even numbers
from the original array (in the same order). Original array will not be empty and will contain at least the 
length parameter of even numbers. 
 */
function evenNumbers(array, length){
    let arr = [];
    array.forEach((elem) => {
        if(elem % 2 === 0){
            arr.push(elem);
        }
    });
    return arr.splice(-length);
}






















