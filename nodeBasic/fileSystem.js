const { error } = require('console');
const fs = require('fs')

//  fs.writeFileSync('./testFile.txt',"This is first sync file")

//   fs.writeFile('./testFile.txt','this is second Async file',(e)=>{})

// let readSync = fs.readFileSync('./testFile.txt','utf-8')


// console.log(readSync)

// let appendSync = fs.appendFileSync('./testFile.txt',`\ntoday's date is - ${Date.now().toLocaleString()}`,'utf-8')
// fs.appendFile(
//   "./testFile.txt",
//   `\ntoday's date is async - ${Date.now().toLocaleString()}`,(e)=>{
//    if(e) throw e;

//   }
// );

// fs.copyFileSync('./testFile.txt','./coptOfText.txt')

// fs.readFile('./testFile.txt',"utf-8",(err,result)=>{
//     if(!err){
//         console.log(result)
//     }
  
// })
// fs.readFile('./testFile.txt',"utf-8",(err,result)=>{
//     if(!err){
//         console.log(result)
//     }
  
// })


// fs.mkdir('./logFile',(e)=>{})

// fs.unlink('./coptOfText.txt',(e)=>{})

// fs.rename("./logFile/renamedTestFile.tsx", "./renamedTestFile.txt", (e) => {
//     console.log(e)
// });

// fs.readdir('./logFile',(e,result)=>{
//     if(!e){
// console.log(result)
//     }
// })