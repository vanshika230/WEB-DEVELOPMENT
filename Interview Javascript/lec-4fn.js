//   ->execution context is made when function is called.
//   ->this is always calculated
//   ->scope:- area where a function or variable can be found
//   ->function voh variable ko dhoondhne ke liye andar check karega, fir apne se bahar wale ko, fir aur bahar wale ko .. and so on
//   ->lexical scope:- outside --> function definition ke outside dekhenge 
//   -> function definition is given more priority than function call
//   ->function call ki outside nahi dekhenge


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


//4. with parameters
console.log("line number 1", varname);
var varname=10;
function b(param){
    console.log("line number 3",param);
       }
console.log("line number 7",varname);
function fn(){
    console.log("line number 9",varname);
    var varname=20;
    //fn b definition

    b(varname);//function call
    console.log("line number 12",varname);
}
fn(); 

/* output:-
line number 1 undefined
line number 7 10
line number 9 undefined
line number 3 20
line number 12 20 */
