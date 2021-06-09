// var a=10;
// console.log("line number 2",a);
// function fn(){
//     console.log("line number 4",a);
//     var a=20;
//     a++;
//     console.log("line number 7",a);
//      if(a){
//          var a=30;
//          a++;
//          console.log("line number 11",a);
//      }
//      console.log("line number 13",a);
// }
// fn();
// console.log("line number 2",a);

/*   output:- I expected
line number 2 10
line number 4 undefined
line number 7 21
line number 11 31
line number 13 21
line number 2 10
*/
//same hi variable hai, var ek hi baar create hota hai aur vahi chalta hai
/* output:- reality
line number 2 10
line number 4 undefined
line number 7 21
line number 11 31
line number 13 31
line number 2 10
*/

letFruit ="orange";
var varFruit="orange";
console.log("letFruit",letFruit,"varFruit",varFruit);
{
    let letFruit="apple";
    var varFruit="apple";
    console.log("letFruit",letFruit,"varFruit",varFruit);
}
console.log("letFruit",letFruit,"varFruit",varFruit);
/* output:- expected
letFruit orange varFruit orange
letFruit apple varFruit apple
letFruit orange varFruit apple

output:-reality
letFruit orange varFruit orange
letFruit apple varFruit apple
letFruit orange varFruit apple
*/