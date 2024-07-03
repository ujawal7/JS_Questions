// Function Scope and Block Scope

function a(){
    let x = 10;
}
function b(){
    console.log(x)
}
a();
b();
// this will give error that x is undefined 
// Because Scope of variable X is limited to function a()

let y = 10
function a(){
     y = y+5;
}
function b(){
    console.log(y)
}
a();
b();

// It will refer to same y global variable both the function 
// First It will run the first function function a(), what ever value we get of y it will be used in function b()
// we get 10 in function a() and that 10 is used in function b()


// Hoisting 

x = 3;
console.log(x)
var x
//this will give output as 3



// Let don't do hoisting while var does 
// Hoisting means if we declare any varible with var before initializing it. it will return undifined
console.log(x)
var x = 10;// undefined

console.log(x)
let x = 10; //this will give error saying cannot access x before initializing it.

//we cannot have multiple var
var g = 9;
{
    var g = 7;
    console.log(g); //7
}
console.log(g) // 7

// we can have multiple let
let g = 9;
{
    let g = 7;
    console.log(g); //7
}
console.log(g) // 9