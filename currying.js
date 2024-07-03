// Write a function which helps to achive multiply(a)(b) and return product of a and b 
const mutiply= (num1) => {
    return (num2) => {
       return num1 * num2;
    };
};
console.log(mutiply(2)(3));
//Below is same way to write above code
const multiple = (num1) => (num2) => num1*num2;
console.log(multiple(5)(4));

