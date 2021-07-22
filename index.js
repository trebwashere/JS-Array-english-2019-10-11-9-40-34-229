// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
 let answerToA = 'a is of type String -> Array.isArray(a) = ' + Array.isArray(a);
 let answerToB = 'b is of type Array -> Array.isArray(b) = ' + Array.isArray(b);
 console.log(answerToA);
 console.log(answerToB);


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(let i = 0; i < a.length; i++){
    a[i] = a[i] * 2;
}
console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var caseOne = "";
var caseTwo = "";
var caseThree = "";
for(let i = 0; i < colors.length; i++) {
    if (i < 3) {
        caseOne = caseOne.concat(colors[i].concat(' '));
        caseTwo = caseTwo.concat(colors[i].concat('+'));
        caseThree = caseThree.concat(colors[i].concat(','));
    } 
    else {
        caseOne = caseOne.concat(colors[i]);
        caseTwo = caseTwo.concat(colors[i]);
        caseThree = caseThree.concat(colors[i]);
    }
}
console.log("'" + caseOne + "'");
console.log("'" + caseTwo + "'");
console.log("'" + caseThree + "'");


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
a.sort((a,b) => b-a);
console.log(a);
//TODO should output: [10,8,5,4,1]


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function getHighestFrequency(arr) {
    return arr.sort((a,b) =>
        arr.filter(v => v===a).length - arr.filter(v => v===b).length
    ).pop();
}
console.log("'" + getHighestFrequency(a) + "'");