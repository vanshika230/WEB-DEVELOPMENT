//types of function
//function statement
// //function definition
// callbacks,higher order
// function sayHello(param)
// {
//     console.log("hollaaa",param)
// }
// sayHello(); //if you mention param to be passed in definition and then you dont pass a parameter,you'll get undefined as the value 

// console.log("---------------------------")
// sayHello([1,2,3,4,5])
// console.log("---------------------------")
// sayHello(10);
// console.log("---------------------------")
// sayHello({name:"Vanshika"})
// console.log("---------------------------")
// sayHello();
//function expression
// let fnContainer = function () //anonymous fnx
// {
//     console.log("hey I'm an expression");
// }
// fnContainer();


//IIFE -> Immediately invoked function expression
// /require,pollution,require
// ( function fn(){
//     console.log("I am IIFE");
//     console.log("I will call myself");
// })();

// //Arrow function --> it is percieved to be born to reduce syntax bits actually react's atma
// //this 
// let fn= num => num*num;
// console.log(fn(5));

// // function can be passed as parameter
 
// function sayHello(param)
// {
//   console.log("hello ",param);
//   param();
//   return "from sayhello";
// }

// //address
// function smaller()
// {
//     console.log("hey I'm working");
// }
// let rval= sayHello(smaller);
// console.log(rval);
//hello  [Function: smaller]
// hey I'm working
// from sayhello

// function outer()
// {
//     console.log("I'm outer returning inner");
//     return function()
//     {
//         console.log("I'm inner");
//     }

// }
// let rval=outer();
// console.log(rval);
// rval();
// I'm outer returning inner
// [Function (anonymous)]
// I'm inner