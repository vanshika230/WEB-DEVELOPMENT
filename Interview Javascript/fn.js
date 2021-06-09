var varname=10;
function fn(){
    var varname=20;
    console.log(varname);
}
fn();
//output :- 20

//2. lexical scoping
console.log("line number 1", varname);
var varname=10;
//fn b definition
function b(){
    console.log("line number 3",varname);
}
console.log("line number 7",varname);
function fn(){
    console.log("line number 9",varname);
    var varname=20;
    b();//function call
    console.log("line number 12",varname);
}
fn(); 
/* output:-
line number 1 undefined
line number 7 10
line number 9 undefined
line number 3 10
line number 12 20 */

//3. lexical scoping
console.log("line number 1", varname);
var varname=10;

console.log("line number 7",varname);
function fn(){
    console.log("line number 9",varname);
    var varname=20;
    //fn b definition
function b(){
    console.log("line number 3",varname);
       }
    b();//function call
    console.log("line number 12",varname);
}
fn(); 
/* output :-
line number 1 undefined
line number 7 10
line number 9 undefined
line number 3 20
line number 12 20
*/


