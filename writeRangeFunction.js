// Write a function which implement range

// range(1, 50)
// 1, 2, 3,.....,50

const range = ((start, end) => {
    return[...Array(end - start).keys()].map(el => el + start)
})
console.log(range(0, 50))