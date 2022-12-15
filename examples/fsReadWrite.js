const fs = require("fs");
let srcPath = "./data/test.txt";
let dest = "./data/Newtest";

// function getContext(srcPath) {

//     fs.readFile(srcPath, "utf8" , (err,data)=> {
//     if(err) throw new Error("file read issue")
    
//     return data.toString();
    
    
//     })

// }
// function writeContext(src, dest){

//     fs.writeFile(src, dest, (err)=>{
//         if(err) throw new Error("file read issue")
//     })
// }

// writeContext(dest, getContext(srcPath));

function copyData(savPath, srcPath) {
    fs.readFile(srcPath, 'utf8', function (err, data) {
            if (err) throw err;
            //Do your processing, MD5, send a satellite to the moon, etc.
            fs.writeFile (savPath, data, function(err) {
                if (err) throw err;
                console.log('complete');
            });
        });
}

copyData(dest, srcPath);