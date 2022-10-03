//codewar questions and solutions.

/*1.
Write function called persistance that takes in positive parameter 'num' and returns its multiplicative
persistance which is the number of times you must multiply the digits in 'num' unitl you reach single digit.*/
function persistance(num){
    let keepGoing = true;
    let count = 0;
    let arr = num.toString().split('');
    if(arr.length === 1) return 0;
    while(keepGoing){
        count++;
        let temp = arr.reduce((previous, current) => +previous * +current,0);
        arr = temp.toString().split('');
        if(arr.length > 1){
            keepGoing = true;
        }
        else{
            keepGoing = false;
        }
        
    }
    return count;
}

/*
2.
Your task is to sort a given string. Each word in teh string will contain a single number.
This number is the position the word should be in the result. Numbers can range from 1-9.
If input is empty, return empty string. 
 */
function order(words){
    let arr = words.split(' ');
    let newArr = [];
    let index = 1;
    while(index < arr.length + 1){
        arr.forEach((elem) => {
            if(elem.includes(index.toString())){
                newArr.push(elem);
            }
        });
        index++;
    }
    return newArr.join(' ');
}
/*
3.
Complete the solution so that the function will break up camel casing, using a space between words.
 */
function solution(string) {
    const result = string.replace(/[A-Z]/g, ' $&').trim();
    return result;
}
/*
4.
Your task is to create NxN multiplication table of sized provided in parameter;
 */
let multiplicationTable = function(size){
    let mainArr = [];
    let index = 1;
    for(let i = 1; i < size + 1; i++){
        let tempArr = [];
        for(let j = 1; j < size +1; j++){
            tempArr.push(j * i);
        }
        mainArr.push(tempArr);
    }
    return mainArr;
}
/*
5. 
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses 
the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */
function isPangram(string){
    string = string.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let alphaArr = alphabet.split('');
    let arr = string.split('');
    arr.forEach((elem) => {
        if(alphaArr.includes(elem)){
            let index = alphaArr.indexOf(elem);
            alphaArr.splice(index,1);
        }
    });
    return alphaArr.length === 0 ? true : false;
}
/*
6.
I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.
 */
function nthFibo(n) {
    let finalArr = [0,1];
    if(n === 1) return 0;
    else if(n === 2) return 1;
    else{
        for(let i = 0; i < n-2; i++){
            let numOne = finalArr[finalArr.length-1];
            let numTwo = finalArr[finalArr.length-2];
            finalArr.push(numOne + numTwo);
        }
        return finalArr[n-1];
    }
}

/*
7. In this kata, you are required to (given a string) replace every letter with its position in the alphabet. 
Ignore anything that isn't a letter. 
 */
function alphabetPosition(text){
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let finalArr = [];
    text = text.toLowerCase();
    let arr = text.split('');
    arr.forEach((elem) => {
        if(alpa.includes(elem)){
            finalArr.push(alpha.indexOf(elem) + 1);
        }
    });
    return finalArr.join(' ');
}

/*
write func tha takes an array of numbers and a target number. Find two numbers in the array that add up to the 
target number. Then return as a tuple, the index of these numbers. 
 */
function twoSum(numbers, target){
    let returnArr = [];
    let index = 1;
    while(index < numbers.length){
        for(let i =0; i < numbers.length; i++){
            if(numbers[i] + numbers[index] === target && i !== index){
                returnArr.push(i, index);
                return returnArr;
            }
        }
        index++;
    }
}






















