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
/*
7.
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
 */
function minSum(arr) {
    let total = 0;
    let sorted = arr.sort((a,b) => a-b);
    for(let i = 0; i < sorted.length/2; i++){
        let index = i + 1;
        total += sorted[i] * sorted[sorted.length-index];
    }
    return total;
}
/*
8.
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
 */
var greet = function(name) {
    let firstLetter = name[0].toUpperCase();
    let arr = name.split('');
    let finalArr = [];
    arr.forEach((elem, index) => {
        if(index === 0){
            finalArr.push(elem.toUpperCase());
        }
        else{
            finalArr.push(elem.toLowerCase());
        }
    });
    let final = finalArr.join('')
    return `Hello ${final}!`
};

/*
9.
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) between 0 and n.
Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...) the function taking n and d 
as parameters and returning this count.
 */
function nbDig(n, d) {
    let ar = [];
    let strD = d.toString();
    let counter = 0;
    for(let i = 0; i <= n; i++){
        ar.push(i*i);
    }
    ar.forEach((elem) => {
        let temp = elem.toString();
        for(let i = 0; i < temp.length; i++){
            if(temp[i] === strD){
                counter++;
            }
        }
    });
    return counter;
}





















