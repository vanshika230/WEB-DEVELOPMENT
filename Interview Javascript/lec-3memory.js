 console.log(global)
// nodejs gives an object
/*{ <ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]        
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]        
  }

} } */
// browser mein global ke similar window hota hai

 2. console.log(this)
// {} empty object

fn();
function fn()
{
    console.log("hello")
}
fn();
//output:-
//hello
//hello
