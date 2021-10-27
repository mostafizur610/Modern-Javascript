// const fun = (a,b) => {
//     return a+b
// }
// console.log(fun(4,9));

// * arror function

// function number (){
//     return 10;
// }

// let number= (n,o) => {
//      return n+o;
// };
//     console.log(number(10,5));  

// var javascript ={
// name: "Javascript",
// libraries: ["react","angular","vue"],
// printLibraries: function () {
//     this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
        
//     },
    
// };
// javascript.printLibraries();

// var x = 4;
// var y = 5;
// var result = x+y;

// var myObj = {
//     name: "Javascript",
//     estd: "1995",
//     ranking: "1", 
//     x, 
//     y,
//     result,
// };
// var keys= Object.keys(myObj);
// var values= Object.values(myObj);
// var entries= Object.entries(myObj);
// console.log(entries);

// function myFunk(x=5){
//     return x;
// }
// console.log(myFunk(null));

// spread operator

// var numbers = [1,2,3];
// var a= [...numbers];
// numbers.push(4);


// var newNumbers = [...numbers,4,5,6];
// console.log(newNumbers);

// function myFunk(a, ...params){
//     console.log(a);
//     console.log(params);
// }
// myFunk(5,6,7,8,9);

// destructiring

// const user = {
//     id: 339,
//     name: 'mithun',
//     age: 35,
//     education:{
//         degree: "Masters",
//     },
// };
//  const{
//      education: {degree:x},
// } = user;
//  console.log(x);

// var a=1;
// var b=2;

// // var temp=a;
// // a=b;
// // b=temp;
// // console.log(a,b)
// [b,a]=[a,b];
// console.log(a,b)












import *as test from './externel.js';

console.log(test.a);