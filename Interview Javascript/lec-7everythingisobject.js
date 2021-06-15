// const a=10;
// const arr=[1,2,3,4,5];
// arr.shift();
// console.log(arr);


//objects
//key :value
//string,number :valid type
// let object={
//     name:"Vanshika",
//     lastName: "Mishra",
//     sayHi: function(){
//         console.log("vanshika says Hi!");
//     }
// }
// console.log(object);
// //loop
// for(let key in object)
// {
//     console.log(key," ",object[key]);
// }
// object.sayHi();

// let arr=[1,2,3,4,5];
// arr.myprop="hello";
// console.log(arr);
// arr.Print=function(){
//     console.log("hello from array")
// }
// for(let key in arr)
// {
//     console.log(key," ",arr[key]);
// }

// console.log(arr);
/*
[ 1, 2, 3, 4, 5, myprop: 'hello' ]
0   1
1   2
2   3
3   4
4   5
myprop   hello
Print   [Function (anonymous)]
[ 1, 2, 3, 4, 5, myprop: 'hello', Print: [Function (anonymous)]
]
*/

//objects are emulated as arrays
//functions-->object ->key:value
//extra feature : code property that can be executed when you invoke that function
function fn()
{
    console.log("Hello from fn");
}
fn();
fn.prop="property of function";
fn.myfn= function fn(){
    console.log("I am a method of a function");
}
console.log(fn);
fn();
fn.myfn();
console.log(fn.prop);
/* Hello from fn
[Function: fn] { prop: 'property of function', myfn: [Function: fn] }
Hello from fn
I am a method of a function
property of function
*/

//everything is object in js, other than these primitive types
// 6 primitives:- number,string,boolean,null,undefined,symbol








