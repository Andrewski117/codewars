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























