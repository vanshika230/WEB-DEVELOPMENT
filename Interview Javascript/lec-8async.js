const fs = require("fs");
//console.log("before");
// let data = fs.readFileSync("f1.txt");
// console.log("" + data);
//console.log("after")
//console.log("mean-while")l
// async function
//Output
/*  
before
data
after 
mean-while
----->the problem here lies that it wont show any content till data is processed and outputed.
*/
console.log("Before");
// async function nodejs 
fs.readFile("f1.txt", cb);
function cb(err, data) {
    if (err) {
        console.log(err)
    } else {

        console.log("data" + data);
    }
}
console.log("After");
console.log("Mean while");
/* 
output:-
Before
After
Mean while
data
----->this is much more convenient to present data
*/
