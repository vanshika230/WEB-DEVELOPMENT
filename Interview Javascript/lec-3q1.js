 console.log("varname  ",varname); //varname undefined
 var varname;
 console.log("varname ",varname); //varname undfined
 varname="Captain America";
 console.log("varname ",varname); //varname  Captain America

 fn(); 
 function fn()
 {
     console.log("Hello from fn");
 }
 fn();
//output:-
//Hello from fn
//Hello from fn

 var fncontainer = function()
 {
     console.log("I am an expression");
 }
 fncontainer();

console.log("line number 1",varname);
var varname=10;

function b(){
    console.log("line number 5",varname);
}
console.log("line number 7",varname);
function fn()
{
    console.log("line number 9",varname);
    var varname=20;
    b();
    console.log("line number 13",varname);
}
fn();
/* line number 1 undefined
   line number 7 10 
   line number 9 undefined
   line number 5 10
   line number 13 20  */
