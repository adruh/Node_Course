const fs = require('fs');
// read file
// const fileContent = fs.readFileSync('f1.txt');
// console.log(''+fileContent);

// write file
// fs.writeFileSync('f2.txt', 'no file like f2');
// fs.appendFileSync('f3.txt', '\nthis is appended text');
// fs.unlinkSync('f2.txt');

// create folder
// fs.mkdirSync('myFolder');

// check the content inside
let folderPath = 'C:\\Users\\Public\\Dev\\Node\\hello_world\\node module system\\myFolder';
// let folderContent = fs.readdirSync(folderPath)
// console.log("folderContent" , folderContent);
// let exists = fs.existsSync('1_cp.js');
// console.log('exists', exists);
// remove folder
fs.rmdirSync('myFolder');