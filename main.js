// //Sync Functions
// function sum(n){
//     let ans=0;
//     for(let i=0;i<=n;i++){
//         ans+=i;
//     }
//     console.log(ans);
// }
// sum(100);

// // Async functions
// function sum(n){
//     let ans=0;
//     for(let i=1;i<=n;i++){
//         ans+=i;
//     }
//     console.log(ans);
// }

// function sum100(){
//     return sum(100);
// }

// setTimeout(sum100,1000);
// console.log("hello")

// const fs=require("fs");
// fs.readFile("a.txt", "utf-8", function(err,data){
//     console.log(data);
// })

// console.log("hi i am js code after reading file data is assigned");
// let ans=0;
// for(let i=0;i<1000000;i++){
//     ans++;
// }// as js thread is busy in this loop but fist it become idle to perform pending task of reading a.txt file
// console.log("hi there 2")

// fs=require("fs");
// function jigyasuReadFile(){// no callback usedf
//     return new Promise(function(resolve){
//         fs.readFile("a.txt", "utf-8", function(err,data){
//             resolve(data);
//         })
//     })
// }
// function onDone(data){
//     console.log(data);
// }
// jigyasuReadFile().then(onDone);

// function jigyasu(){
//     let p =new Promise(function(resolve){
//     resolve();// undefined
// });
// return p;
// }
// function print(data){
//     console.log(data);
// }
// jigyasu().then(print);

// //Await async
// function jigyasu(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("hi there")
//         },1000)
//     });
// }

// async function main(){
//     let value=await jigyasu();
//     console.log(value);
// }

// main();

const fs=require("fs");
fs.readFile("a.txt","utf-8",function(err,data){
  console.log(data);
  data=data.trim();
  console.log(data);
  fs.writeFile("a.txt",data,"utf-8",function(err){
    if(err){
      console.log("error in writing file");
    }
    else{
      console.log("file updated");
    }
  });
});