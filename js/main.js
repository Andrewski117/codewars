//codewar questions and solutions.

/*1.
Return a new array consisting of elements which are 
multiple of their own index in input array (length > 1).*/
function multipleOfIndex(array) {
    let newArr = array.filter((elem,index) => {
        return elem % index === 0;
    });
    return newArr;
}

/*2.
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the 
minimum values in each row.
 */
function sumOfMinimums(arr) {
    let minVal = 0;
    arr.forEach((elem) => {
        minVal += Math.min(...elem)}
    );
    return minVal;
}

/*3.
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
 */
function shortcut (string) {
    let arr = string.split('');
    let finalArr = [];
    let lowerCaseVowels = ['a','e','i','o','u'];
    arr.forEach((elem,index) => {
        if(lowerCaseVowels.indexOf(elem) === -1){
            finalArr.push(elem);
        }
    });
    return finalArr.join('');
} 

/*
4. ATM Machines allow 4 or 6 digit pin codes and they must be numbers. return true if valid.
 */
function validatePIN(pin){
    let reg = new RegExp(`^[0-9]*$`)
    let finalString = pin.match(reg);
    if(finalString === null) return false;
    return finalString[0].length === 4 || finalString[0].length === 6 ? true : false;
    
}

/*
5.
Return the odds from a list:
 */
function odds(values){
    return values.filter((elem) => {
        return elem % 2 !== 0;
    })
}
/*
6.
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.
 */
function noBoringZeros(n) {
    n = n.toString();
    let nArr = n.split("");
    if(nArr.length <= 1 ) return 0;
    for(let i = nArr.length-1; i > 0; i--){
        if(nArr[i] === '0'){
            nArr.pop();
        }
        else{
            let final = nArr.join('');
            return +final;
        }
    }
}
/*
7.
You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". 
 */
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let remaining = (blueStart - bluePulled) + (redStart -redPulled);
    return (blueStart -bluePulled) / remaining;
}
/*
8.
Your task is to sum the differences between consecutive pairs in the array in descending order.
 */
function sumOfDifferences(arr) {
    if(arr.length <=1 ) return 0;
    arr = arr.sort((a,b) => a-b).reverse();
    let sum = 0;
    for(let i = 0; i < arr.length-1; i++){
        sum += (arr[i] - arr[i+1]);
    }
    return sum;
}
/*
9.
It's up to you to find out whether the cuboid has equal sides (= is a cube).
 */
var cubeChecker = function(volume, side){
    if(volume <= 0 || side <= 0) return false;
    return Math.pow(side,3) === volume ? true : false;
};
/*
10. Add the value "codewars" to the websites array.
 */
let websites = [];
websites.push('codewars');























