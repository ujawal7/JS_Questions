// Write a function which get's an array and an element and returns a array with this element at the end

//If we use "push" it will update existing array, it will not create new array
const numbers = [1, 2];
const append = (arr, el) => {
    arr.push(el);
    return arr;
}
const newNumber = append(numbers, 3)
console.log(newNumber) // [1, 2, 3]
console.log(numbers) //  [1, 2, 3]

//If we use "Spread Operator [...]" it will create new array and append in new array
const numbers1 = [1, 2];
const append1 = (arr, el) => {
        return [...arr, el]; 
}
const newNumber1 = append1(numbers1, 3)
console.log(newNumber1) // [1, 2, 3]
console.log(numbers1) //  [1, 2]