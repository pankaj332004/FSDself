// function hello(){
//     console.log("inside hello function");
//     console.log("hello");
// }

// function demo(){
//     console.log("calling hello function");
//     hello();
// }

// console.log("calling demo function :")
// demo();
// console.log("done , bye!");

// Visualizing the call stack
// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans = two()+one();
//     console.log(ans);
// }
// three();

// single threaded js
// let a =20;
// console.log(a);
// let b = 15;
// console.log(b);
// console.log(a+b);

//synchrous nature
// setTimeout(()=>{
//     console.log("hello");
// },2000);

// callback hell
// let h1 = document.querySelector("h1");

// function changeColor(color,delay,){
//     setTimeout(()=>{
//         h1.style.color = color;
//     },delay);
// }
// changeColor("red",1000);
// changeColor("green",2000);
// changeColor("purple",3000);
// changeColor("orange",4000);
// changeColor("blue",5000);

// function changeColor(color,delay,nextcolor){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextcolor) nextcolor();
//     },delay);
// }
// changeColor("red",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("purple",1000,()=>{
//             changeColor("orange",1000,()=>{
//                 changeColor("yellow",1000,()=>{
//                     changeColor("blue",1000);
//                 });
//             });
//         });
//     });
// });

// Promises  :- The Promises object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// function savetoDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         success();
//     }git
//     else{
//         failure();
//     }
// }
// savetoDb(
//     "hello bhai",
//     ()=>{
// console.log("your data was saved");
// savetoDb(
//     "hello duniya",
//     ()=>{
// console.log("data2 was saved");
// savetoDb(
//     "hello grandparents",
//     ()=>{
// console.log("data3 was saved");
// },
// ()=>{
//     console.log("weak connection. data not saved");
// }
// );
// },
// ()=>{
//     console.log("weak connection. data not saved");
// }
// );
// },
// ()=>{
//     console.log("weak connection. data not saved");
// }
// );

// function savetoDb(data,success,failure){
//     return new Promise((resolve , reject)=>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve("success : data was saved");
//         }else{
//             reject("failure : weak connection");
//         }
//     });
// }

// then and catch
// function savetoDb(data,success,failure){
//     return new Promise((resolve , reject)=>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve("success : data was saved");
//         }else{
//             reject("failure : weak connection");
//         }
//     });
// }
// savetoDb("hello brother"); 
// request.then(() => {
//     console.log("promise was resolved");
// })
// .catch(() => {
//     console.log("promise was rejected");
// })

// promise improved version/
// savetoDb("hello brother").then(() => {
//     console.log("promise was resolved");
//     savetoDb("hello friend").then(()=>{
//         console.log("data 2 was saved");
//     });
// })
// .catch(() => {
//     console.log("promise was rejected");
// })

// savetoDb("hello brother").then(() => {
//     console.log("promise was resolved");
//     return savetoDb("hello friend");
// })
// .then(()=>{
//     console.log("data 2 was saved");
// })
// .catch(() => {
//     console.log("promise was rejected");
// })

// savetoDb("hello brother").then((result) => {
//     console.log("data 1 was saved");
//     console.log("result of promise : ", result);
//     return savetoDb("hello friend");
// })
// .then((result)=>{
//     console.log("data 2 was saved");
//     console.log("result of promise : ", result);
//     return savetoDb("Meri jaan");
// })
// .then((result)=>{
//     console.log("data 3 was saved");
//     console.log("result of promise : ", result);
// })
// .catch((error) => {
//     console.log("promise was rejected");
//     console.log("error of promise : ", error);
// })

// let h1 = document.querySelector("h1");
// function changeColor(color,delay){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//         h1.style.color = color;
//         resolve("color change sucessfully");
//     }   ,delay);
//     });
// }
// changeColor("red" , 1000)
// .then(()=>{
//     console.log("red color was changed");
//     return changeColor("green",1000);
// })
// .then(()=>{
//     console.log("green was changed successfully");
//     return changeColor("aqua",1000);
// })
// .then(()=>{
//     console.log("aqua was changed successfully");
//     return changeColor("purple",1000);
// })
// .then(()=>{
//     console.log("purple was changed successfully");
//     return changeColor("orange",1000);
// })
// .then(()=>{
//     console.log("orange was changed successfully");
//     return changeColor("yellow",1000);
// })
// .then(()=>{
//     console.log("yellow was changed successfully");
//     return changeColor("blue",1000);
// }).then(()=>{
//     console.log("blue was changed successfully");
// })
// .catch(()=>{
//     console.log("Promised was rejected");
// })

// changeColor("red",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("purple",1000,()=>{
//             changeColor("orange",1000,()=>{
//                 changeColor("yellow",1000,()=>{
//                     changeColor("blue",1000);
//                 });
//             });
//         });
//     });
// });