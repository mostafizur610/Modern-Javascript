// // template literel
// var a=5;
// var b=6;
// console.log(`i am
//                             ${a+b}`);


// function modifier(strings,...values){
//     // console.log(strings);
//     // console.log(values);  
//     const m = strings.reduce((prev, current) => {

//         return prev + current + (values.length ? "Mr. " + values.shift(): "")

//     },"");
//     return m;
// }

// var player1 = "Sakib";
// var player2 = "Tamim";
// console.log(modifier`we have ${player1} and ${player2} in our cricket team`);


// function log(anything){
//     return console.log(anything);

// }
// let myArray = new Array();
// // myArray[0]=5;
// // myArray[1]=2;
// let mySet = new Set();
// //mySet(s);
// mySet.add(5).add(6).add(7).delete(6);
// mySet.add('bd');
// //mySet.delete('bd');
// //log(mySet.has('bd'));


// log (mySet);

// const ws = new WeakSet([{a: 1},{b: 2}]);
// for(let value of ws){
//     log(value);
// }

//  const ws = new WeakSet();
//  class SomClass{
//      constructor(){
//         ws.add(this);

//      }
//      method(){
//          if(!ws.has(this)){
//              throw new Error('u can not access tjis method directly!');

//          } else{
//             return 'I am method';
//          }
      
//      }
//  }
// const a =  new SomClass();
// log(a.method());
// //log(SomClass.prototype.method());

 let a = ['js','php','ruby'];
 a.copyWithin(-2,-1);
 console.log(a);