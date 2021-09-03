//✅function for organizing -->2  fnxs one for making new directory ,one for identifyng and putting it acc

//✅1.input -->directory path given
//✅2. create --> organized_files -->directory
//✅3. identify categories acc to path extension 
//✅4. cut/copy files from directory to respective folders 
function organizeFn(dirPath)
{    let destPath;
    if(dirPath==undefined)
    {
        destPath=process.cwd();
        return;
    }
    else
    {
        let doesExist= fs.existsSync(dirPath);
        if(doesExist)
        {
            //we will make organized_files in it
             destPath= path.join(dirPath,"organized_files");
            if(!fs.existsSync(destPath))
            {
                fs.mkdirSync(destPath);
            }
            
        }
        else{
            console.log("kindly enter valid path");
            return;
        }
    }
    organizeHelper(dirPath,destPath);
}
function organizeHelper(src,dest)
{
    let childNames = fs.readdirSync(src);
    for(let i=0;i<childNames.length;i++)
    {
        let childAddress= path.join(src,childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile)
        {
           let category = getCategory(childNames[i]);
            console.log(childNames[i],"belongs to category",category);
            sendFiles(childAddress,dest,category);
        }
    
    }

}
function getCategory(name)
{
    let ext= path.extname(name);
    ext=ext.slice(1);
    for(let type in types){
        let cTypeArray = types[type];
        for(let i=0;i<cTypeArray.length;i++)
        {
            if(ext==cTypeArray[i]){
                return type;
            }
        }
    
    }
    return "other"; 
}
function sendFiles(srcFilePath,dest,category){
    let categoryPath = path.join(dest,category);
    if(fs.existsSync(categoryPath)==false)
    {
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath= path.join(categoryPath,fileName);
    fs.copyFileSync(srcFilePath,destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName,"copied to",category);



}

 

module.exports={
    organizeKey=organizeFn
}
