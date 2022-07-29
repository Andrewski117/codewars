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























