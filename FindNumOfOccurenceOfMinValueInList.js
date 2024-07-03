// Find the number of Occurence of Minimum Value in List(find the min value in arry & how many are there)


// Math.min() will not take array but it will take argu
const arr = [5, 2, 3, 2, 2];
const minValue = Math.min(...arr); //Math.min(arr) this will not work 
const minArr = arr.filter((el) => el === minValue);
console.log(minArr.length);
console.log(minArr);
