// Q.Given an array find which numbers are greater than given target;
var array = [1, 3, 65, 87, 32, 4, 67, 23, 98, 23, 4, 54, 65, 76, 44, 77];
var target = 10;

function findGreaterNumber(array, target) {
    // console.log(array, target)
    for (var i = 0; i < array.length; i++) {
        // console.log(array[i])
        if (array[i] > target) {
            console.log(array[i])
        }
    }
}
findGreaterNumber(array, target);

// varibles - var , let , const 

// var myName = "Swaraj"; // assigining
// myName = "Irise"; // re-assigning
// var myName = "Irise"; // re-decleare
// console.log(myName)
// // Reasssign and redeclare possible 


// let myName = "Swaraj";
// myName = 'Irise';
// let myName = 'Abc';
// // console.log(myName)

// // Reassign is possible but redeclaer is not 

// const myName = 'Swaraj';
// // myName = "Abc";
// // const myName = "abc"
// console.log(myName);

// Reassigning is not possible and Redeclare is not possible