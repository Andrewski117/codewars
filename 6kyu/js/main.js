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






















