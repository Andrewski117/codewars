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























