/**
 * Let & Const
 */

// function letVarExample(){

//     let lastName = 'V'
//     if(true){
//     var firstName = "Nazariy";      // exists in function scope, defined in function scope

//     console.log(" in: ", lastName);
//      lastName = "Dumanskyy";     // exists in block scope, defined in block scope
//   }
//   console.log("Function Scope Access: ", firstName);
//   console.log("Function Scope Access: ", lastName);

// }

// letVarExample()

// const anotherExample = [1,2,3];
// anotherExample.push(4);
// console.log(anotherExample);


/**
 * Template Literals
 */

// let firstName = "Nazariy";
// let lastName = "Dumanskyy";

// let fullName = `${firstName} ${lastName} `;
// console.log(fullName);

// let searchResults = 5;
// let output = `${ searchResults > 0 ? `${searchResults} results` : "No search results"}`
// console.log(output);


/**
 * Arrow Functions
 */

// getFullName = () => {
//   let firstName = "Nazariy";
//   let lastName = "Dumanskyy";
//   return `${firstName} ${lastName}`;
// }

// let output = getFullName();
// console.log(output);

// let firstName = "Nazariy";
// let lastName = "Dumanskyy";
// getFullNameShorter = (firstName, lName) => {
//     console.log(`in: ${firstName} ${lName}`);
//     return {'wynik' : 15, 'www': 'inter'};
// }
// console.log("Shorted Example");
// gfs = getFullNameShorter(firstName, lastName);
// gfn = getFullName();
// console.log(gfs);
// console.log(getFullNameShorter);
// console.log(getFullNameShorter());
// console.log(firstName);
// console.log(getFullNameShorter('a','b'));
// console.log(firstName);

/**
 * Default Parameters
 */

//  sortBy = (sortType = "Name", users) => {
//    console.log("Sorting By: ", sortType, "   ", users);
//  }

//  sortBy();
//  sortBy(undefined,['a','b','c']);
//  sortBy("Date", ['a','b','c']);


/**
 * Iterating
 */

let fruits = ["apple", "banana", "orange", "cherries", "jackfruit", "guava"];
// console.log("For Loop:");
// for(let index = 0; index < fruits.length; index++){
//   console.log(fruits[index]);
// }

// console.log("For-Of:");
// for(let fruit of fruits){
//   console.log(fruit);
// }


// console.log("forEach:");
// var fe = 1;
// fe = fruits.forEach((fruit, index) => {
//     fruits[index] += ' -x-';
//     console.log(`${fruit} - ${index}`);
// })
// console.log('--- : ' + fruits);

// console.log("Map:");
// newFruits = fruits.map((fruit, index) => {
//     console.log(`${fruit} - ${index}`);
//     return `${fruit}`;
// }).filter((value)=>{
//     if (value > 'c') {
//         return true
//     } else {
//         return false
//     }
// })

// console.log(newFruits);

/**
 * Destructuring Object
 */

// let fullName = {
// 	firstName: "Nazariy",
// 	lastName: "Dumansktyy"
// }
// console.log(fullName);

// let { firstName, lastName } = fullName;
// console.log(firstName, lastName);


// let user = [{
//         firstName: "John",
//         lastName: "Reilly"
//     },
//     (user) => {
//         console.log("I set the user: ", user);
//     }
// ]
// console.log(user);

// let [newUser, setUser] = user;
// console.log(newUser);
// console.log(setUser({
//     firstName: "a",
//     lastName: "b"
// }));
// setUser({
//     firstName: "Cool",
//     lastName: "Stuff"
// });

// user[1]({
//     firstName: "x",
//     lastName: "y"
// });

// arr = [{
//     a: 1,
//     b: 2,
//     c: 3
// }, 4, 5];
// // let a1 [{a:9, b:9, c:9},a2] =;
// [a1, a2, a3] = arr;
// console.log(a1.b, a2, a3);


/**
 * zasięg zmiennych
 */

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log('na koniec pętli:', i); //błąd

// var something = 5;

// function doSomething() {
//     something = 1;
//     console.log('-',something);
//     console.log('--',this.something);

//     var something = 2; // deklaracja wewnątrz funkcji!!!
//     console.log('=',something);
//     console.log('==',this.something);
// }

// doSomething();
// console.log(something);


/**
 * promises
 */

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            firstName: "Tomasz",
            lastName: "Woł"
        });
        reject("Coś poszło nie tak");
    }, 1500)
});

promise.then((response) => {
    console.log("minęła 1 sek");
    console.log(response);
}).catch((error) => {
    console.log(error);
})

console.log("wywołane po wykonane przed");