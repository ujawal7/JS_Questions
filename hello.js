// Difference Between Undefine and Null

let x;
console.log(x); //undefined
console.log(typeof(x)); //undefined

// when there is no value assign to javaScript variable than it is 'Undefine' & 
// Datatype of that varible also Will 'Undefined'

 let a = null;
 let b;
 console.log(a==b); //True
 console.log(a===b); //False

 // a is null and b is undefined variable both are same for '==' so it will give true
 // where as for '===' it will check for data type also for a & b where b is undefied datatype
 // where as a is null which is primitive data type so it will give false


 // Difference Between '==' & '==='
 // '==' will check only data where as '===' will check of data type also.

 //can we assign undefine explicitly to javascript variable
 // Yes we can
 let z = undefined;
 console.log(z); // undefined 

 //This is used to check weather any varaible is undefined or not.