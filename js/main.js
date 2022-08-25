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























