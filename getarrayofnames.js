// 1. Write code to get array of names from given array of users
// 2. Get only active users
// 3. sort the user by desecnding
// 5. sort the array by books(string)
// 4. Check if user exit or not

const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
    book: "Harry Porter"
  },
  {
    id: 2,
    name: "Jhon",
    isActive: true,
    age: 10,
    book: "Lord of the rings"
  },
  {
    id: 1,
    name: "Mike",
    isActive: false,
    age: 30,
    book: "Dune"
  },
];
//got the array of names using map
const names = users.map((user) => user.name);
console.log(names);

//got the only active users using filter
const names1 = users.filter((user) => user.isActive).map((user) => user.name);
console.log(names1);

//got the users whoes age is below or equal to 10
const names2 = users.filter((user) => user.age <= 10).map((user) => user.name);
console.log(names2);

//sort the user in desecnding order
const names3 = users
  .sort((user1, user2) => (user1.age < user2 ? 1 : -1))
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log(names3);

// sort array of numbers, remember sort mutate the existing array
const arr5 = [1,5,3,2];
const arr6 = [1,5,3,2];
const result = arr5.sort((a, b) => a - b); // acending order
const result1 = arr6.sort((a, b) => b - a); // descending order
console.log(result, result1)

// sort the users by book, remember we can sort the object properties not objects
const sortBooks = users.sort((book1, book2) => {
  const bookName1 = book1.book.split(" ")[1]
  const bookName2 = book2.book.split(" ")[1]
  return bookName1 < bookName2 ? -1 : 1;
})
console.log(sortBooks)


//Is user exist or not 
const isUserExist = ((name, users) => users.some((user) => user.name === name));
console.log(isUserExist("Jhon", users))

