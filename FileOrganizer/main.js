#!/usr/bin/env node
// 1. ✅ switch case for command -- acc to command we will run diffrent function
// 2. define functions accordingly
// 3. make it global 
let fs= require("fs");
let inputArr= process.argv.slice(2);
let path= require("path");
let helpObj=require("./commands/help");
let treeObj=require("./commands/tree");
let organizeObj=require("./commands/organize");
//console.log(inputArr);
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
} //object
//✅node main.js tree "directory path"
//✅node main.js organize "directory path"
//✅node main.js help 
let command = inputArr[0];
switch(command)
{
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1]);

        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Please input right command");
        break; 
}

