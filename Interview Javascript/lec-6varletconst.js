// let and const are ways to declare variable in ES6
 console.log("hello i am working");//this works 
 console.log("varname on line 3",varname); // error:-Cannot access 'varname' before initialization 
 let varname;
 console.log("varname on line 5",varname); //default undefined
 varname=10;
 varname=20;
 console.log("varname on line 6",varname);
let varname;  // Identifier 'varname' has already been declared, flags error at starts while hoisting
//temporal dead zone:- cant access variable before its declaration in let
 const a=10;
//cant leave it empty, cannot reassign, cannot redeclare


// {}block --> memory allocated acc to block
 let fruits="apple";
 console.log(fruits);
 {   
 
     let fruits;
     console.log(fruits);
     fruits="orange";
     console.log(fruits);
 }
 console.log(fruits);
//output:-
/* apple
 undefined
 orange
 apple */


 let fruits="apple";
 console.log(fruits);
 {   
     console.log(fruits); //temporal dead zone:-Cannot access 'fruits' before initialization
     let fruits;
     console.log(fruits);
     fruits="orange";
     console.log(fruits);
 }
 console.log(fruits);



 let fruits="apple";
 console.log(fruits);
 {   

     let fruits;
     console.log(fruits);
     fruits="orange";
     {
         console.log(fruits); 
     }
     console.log(fruits);

}
console.log(fruits);
/* output
apple
undefined
orange
orange                                                                                        
apple
*/

//variable shadowing
 const fruits="apple";
 console.log(fruits);
 {  
     const fruits="orange";
     console.log(fruits);
 }
 console.log(fruits);
/*output:-
 apple
 orange
 apple
 */

//all cases legal with var,const,let at all places,var-const,let-const,var-let
const fruits="apple"; // let as well
console.log(fruits);
{   var fruits="orange"; //illegal shadowing error:-Identifier 'fruits' has already been declared
    console.log(fruits);
}
console.log(fruits);



//important table
/*
keyword   scope     reassign   redeclare    tdz
var       function    ✔         ✔           ❌
let       block       ✔         ❌           ✔
const     block       ❌        ❌           ✔


*/

