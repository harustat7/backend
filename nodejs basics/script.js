//node js basics
// npm
//working with modules

// modules of nodejs
// file system operations
// understanding http modules

// node is not a
// programming language
// technology
// framework
// library

// nodejs is a js runtime enviromnent
// js se backend nhi bn skta kyuki js ke pss voh functionalities nhi hai jinse backend bnta
// ryan dahl ne socha js se backend bna chaiye
// ryan sahl google chrome ka v8 engine ka code open source hai and voh uss code mein chhedkhaani kr rha hai
// fir usne socha ki hume toh js code krna hai
// kyuki chrome ka v8 engine bana hai c++ mein
// ryan dahl wrapper lgta hai v8 engine ke code mein jo js mein likha hua hai
// toh pehle code js wrapper layer mein jayega and fir conversion krke v8 mein jayega  aur c++ modules ke sath ek server create krega
// this whole thing with js wrapper and c++ modules of v8 engine is called nodejs
// thats why it is a js runtime environment

// npm is a package installer for nodejs
// borrowing code from packages already available

// working with node and npm
// npm init->package.json()->lekha jokha of the project
// node basic usage

// file system operations
// using promise-based APIs or use callback and sync APIs
// we will use callback and sync APIs
const fs = require('fs');

// writeFile
fs.writeFile("hey.txt", "hello! kaise ho", function(err){
    if(err) console.error(err);
    else console.log("done");
});
// callback mtlb function

// appendFile


// copyFile
// rename
// unlink