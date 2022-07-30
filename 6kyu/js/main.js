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























