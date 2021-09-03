//function help
function helpFn()
{
    console.log(`
    Commands are given as follows:-
          1.node main.js tree "directory path"
          2.node main.js organize "directory path"
          3.node main.js help   
    `)
}
module.exports={
    helpKey= helpFn
}