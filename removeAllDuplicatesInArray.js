// Remove all Duplicates in array, this will not work with objects

const uniqueArr = (arr) => {
    return [...new Set(arr)];
}
console.log(uniqueArr([1,2,1,2,3,3,4,2,6,8,6,3,3,5,6,7]));

// OR

const uniqueArr1 = (arr1) => {
    return arr1.reduce((acc, el) => {
        return acc.includes(el) ? acc : [...acc, el]
    }, [])
}
console.log(uniqueArr1([1,2,1,2,3,3,4,2,6,8,6,3,3,5,6,7]));