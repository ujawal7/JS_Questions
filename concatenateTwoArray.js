// Write a function to concatenate two array

const mergeArray = (arr1, arr2) => {
    return arr1.concat(...arr2);
}
const arr1 = [1];
const arr2 = [2, 3];
const result = mergeArray(arr1, arr2);
console.log(result, arr1, arr2);

//OR we can use below method

const mergeArray1 = (arr3, arr4) => {
    return [...arr3, ...arr4];
}
const arr3 = [1];
const arr4 = [2, 3];
const result1 = mergeArray(arr3, arr4);
console.log(result1, arr3, arr4);