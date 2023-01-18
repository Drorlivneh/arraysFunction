


//ex 2
//1
const z = [1,2,3,4,5];
const doubleZ = z.map((num)=>num*2);

console.log(doubleZ);

//2
const ages = [34,38,41,43];
const stringAges = ages.map((age)=>age.toString())
console.log(stringAges);

//3
// const exampleString = 'string'
// const capitalize = exampleString.map((string)=>string.toUpperCase())
// console.log(capitalize);
const employees = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30},
    {name: 'Bob', age: 35}
    ];
    const employeesSplit = employees.map(employees => employees.name);
    console.log(employeesSplit);
    const allCapemployeesSplit = employeesSplit.map((Name) => Name.toUpperCase());
    console.log(allCapemployeesSplit);

// // //4
const numsArray = [3,4,5,6];
const numsArrayIndex= numsArray.map((number, index) => {
    return number*index
})
console.log(numsArrayIndex);

//ex 3 forEach Practice

//1
const forEachArray = [3,66,99,77];
let sum = 0;
forEachArray.forEach((num) => {
    sum+=num; 
    
    console.log(sum);});

//2
let anotherArray = [];
const normalArray = [5,7,8,9];
normalArray.forEach((num) =>{
num*2
anotherArray.push(num*2)} );

console.log(anotherArray);
//3
let stringsArray = ['banana','apple','mango'];
 

//4
// const employees2 = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 15 },
//     { name: "Bob", age: 35 },
//    ];
   
//    employees2.forEach((item) => {
//     item.age
//     })
//     console.log(employees2);

//ex 3 filter Practicfe
//1
// const a = [[1,2,3],[4,5,6],[7,8,9]];
// let evenArray = a.filter((num) => {num%2===0});

// console.log(evenArray);

//2
const genearalArray = [3,4,5,6,7,8];
let fiveAndGreaterOnly = genearalArray.filter(num => num>5);
console.log(fiveAndGreaterOnly);

//3
let generalPeopleArray = [
{ name: "Angelina Jolie", isClubMember: true },
{ name: "Eric Jones", isClubMember: false },
{ name: "Paris Hilton", isClubMember: true },
{ name: "Kayne West", isClubMember: false },
{ name: "Bob Ziroll", isClubMember: true }
]

let memberClubArray = generalPeopleArray.filter((item) => item.isClubMember===true);
console.log(memberClubArray);

//ex3- find practice-
//1
let justArray = [-4,5,-6,2];
let positiveArray =justArray.filter((num) => num>0);
let reduceArray = positiveArray.reduce((total, number) => total+number,0);
console.log(reduceArray);

//2
// let calcFactorial = 

// calcFactorial(3)

//3
const students = [ 
    { name: 'John', age: 22 },
      { name: 'Jane', age: 23 },
      { name: 'Bob', age: 24 },
      { name: 'Alice', age: 25 }
   ]

   const oldestStudent = students.reduce((oldest, student) =>{
    if (student.age>oldest) return student;
    return oldest
   },0)
   console.log(oldestStudent);

   







// // // //map method- basics:
// // const fruits = ["apple", "banana", "orange"];

// // const bigger = fruits.map((fruit) => fruit.toUpperCase());
// // const drinks = fruits.map((fruit) => {
// // if(fruit === "banana") return fruit + " juice";
// // return fruit;
// // });
// // console.log(fruits); //["apple", "banana", "orange"]
// // console.log(bigger); //["APPLE", "BANANA", "ORANGE"]
// // console.log(drinks); //["apple", "banana juice", "orange"]


// // // // //foreach method- basics:
// // // // // const drinks = fruits.map(fruit => console.log(fruit + " juice"))


// // // //excercise- map + join:
// // // //input: "George Raymond Richard Martin";
// // // //output: "GRRM";
// // // const input = "George Raymond Richard Martin";
// // const wordsArr= input.split(" "); //['George', 'Raymond', 'Richard', 'Martin'];
// // // //first way (with return):
// // // // const newArr= wordsArr.map((word) => {
// // // //     return word[0]
// // // // })
// // //second way- better (one line):
// const newArr= wordsArr.map(word =>  word[0]); //['G', 'R', 'R', 'M'];
// const newArr= wordsArr.map((word, index) => console.log("the word: " + word + "in index: " + index)); //['G', 'R', 'R', 'M'];
// const result= newArr.join(''); 
// console.log(result); //GRRM


// // // // //diffrence between map and foreach:
// // // // fruits.forEach((fruit) => console.log(fruit + "forEach"));
// // // // const newArrMap= fruits.map((fruit, index) => index);
// // // // console.log(fruits);
// // // // console.log(newArrMap);

// // // // diffrence between == and ===:
// // // // if("1" === "1") //true
// // // // if("1" == "1") //true
// // // // if("1" == 1) //true
// // // // if("1" === 1) //false
