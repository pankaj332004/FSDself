// function is used to reduce complexity of the program
// function hello(){
//     console.log("hello");
// }
// hello();

// function printName(){
//     console.log("ABES Engineering College");
//     console.log("pankaj kumar rajbhar");
// }
// printName();

// function print1to5(){
//     for(let i=0;i<5;i++){
//         console.log(i+1);
//     }
// }
// print1to5();

// function isAdult(){
//     let age = 25;
//     if(age >= 18){
//         console.log("adult");
//     }
//     else{
//         console.log("Not adult");
//     }
// }
// isAdult();

// function printPoem(){
//     console.log("Twinkle twinkle little star");
//     console.log("how i wonder what you are?");
// }
// printPoem();

// function diceRoll(){
//     console.log(Math.floor(Math.random()*6)+1);
// }
// diceRoll();
// diceRoll();
// diceRoll();
// diceRoll();
// diceRoll();
// diceRoll();
// diceRoll();
// diceRoll();
// diceRoll();
// diceRoll();

// function with argument (value pass to the function)
// order is very compulsory
// function printName(name){
//     console.log(name);
// }
// printName("Pankaj");
// printName("Abhii");
// printName("Agrim ");

// function printInfo(name,age){
//     console.log(name,age);
// }
// printInfo("Pankaj , 22");
// printInfo("Abhii,20");
// printInfo("Agrim ,21");

// function sum(a,b){
//     console.log(a+b);
// }
// sum(10,15);
// sum(14,58);
// sum(85,95);

// avg
// function calAVG(a,b,c){
//     let avg = (a+b+c)/3;
//     console.log(Math.floor(avg));
// }
// calAVG(2,3,5);
// calAVG(4,9,10);

//multiplication 
//  function printTable(n){
//     for(let i=n;i<=n*10;i+=n){
//         console.log(i);
//     }
//     for(let i=1;i<=10;i++){
//         console.log(n,"x",i,"=",n*i);
//     }
//  }
//  printTable(5);
//  printTable(10);

// return keyword
// function sum(a,b){
//     console.log("Hello");
//     console.log("Pankaj");
//     return a+b;
//     console.log("nahi chalega");
// }
// let s = sum(sum(5,5),20);
// console.log(s);

// sum 1ton
// function getsum(n){
//     let sum = 0;
//     for(let i=1;i<=n;i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(getsum(1000));

// concatenate
// let str =["hi","hello","bye","!"];
// function concat(str){
//     let result;
//     for(let i=0;i<str.length;i++){
//         result += str[i];
//     }
//     return result;
// }
// console.log(str);
// console.log(concat(str));

//scope 
// it determines the accessibility of variables , objects and  function from different parts of the code
// function scope

// function calsum(a,b){
//     let sum = a+b;
//     console.log(sum);

// };
// calsum(5,6);
//console.log(sum); //function scope

// block scope
// {
//     let a = 25;
// }
// console.log(a);
// for(let i=0;i<=6;i++){
//     console.log(i+1);
// }
// console.log(i)

//lexical scope
// function outerfunction(){
//     let x = 5;
//     let y=6;
//     function innerfunction(){
//         console.log(x);
//     }
//     innerfunction(5);
// }
// outerfunction();

// let greet = "hello";
// function chan(){
//     let greet ="namaste";
//     console.log(greet);
//     function inn(){
//         console.log(greet);
//     }
// }
// console.log(greet);
// chan();

// function expression
// const sum = function(a,b){
//     return a+b;
// }
// console.log(sum(4,6));

// higher order function
// it takes functions as an arguments
// function multipleGreet(func , n){
//     for(let i=1;i<=n;i++){
//         func();
//     }
// }
// let greet = function(){
//     console.log("hello");
// }
// multipleGreet(greet , 2);

// higher order function return a function
// let odd = function(n){
//     console.log(!(n%2==0));
// };
// let even = function(n){
//     console.log(n%2==0);
// };
// function oddEvenTest(request){
//     if(request == "odd"){
//         return function(n){
//             console.log(!(n%2 == 0));
//         }
//     }else if(request == "even"){
//         return function(n){
//             console.log(n%2 == 0);
//         }
//     } else{
//         console.log("wrong request");
//     }
// }
// let request ="odd";
// let func = oddEvenTest(request);
// console.log(func(4));

// methods
// const calculator ={
//     num: 55,
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     multi: function(a,b){
//         return a*b;
//     }
// };
// console.log(calculator.add(5,60));
// console.log(calculator.sub(9,5));
// console.log(calculator.multi(5,8));

//this 
// const student = {
//     name : "pankaj kumar rajbhar",
//     ge : 22,
//     eng : 95,
//     math:98,
//     phy : 96,
//     avg(){
//         console.log(this);
//         let a = (this.phy + this.eng + this.math)/3;
//         console.log(a); 
//     }
// };
// console.log(student.name);
// console.log(student.math);
// console.log(student.avg());

// try and catch
// the try statement allows you to define a block of code to
//be tested for errors while it is being executed.

// the catch statment allows you to define a block of code to be executed 
// if an error occurs in the try block.
// let a = 9;
// try{
//     console.log(a);
// }
// catch{
//     console.log("the 'a' is not define");
// }

// miscellaneous topics
// arrow function
// const sum=(a,b) =>{
//     console.log(a+b);
// }
// sum(5,4);
// let pow = (a,b) =>{
//     console.log(a ** b);
// }
// pow(8,3);

//
// const mul=(a,b)=>{
//     a*b;
// }
// mul(8,5);
// console.log(mul(8,5));

// set time out
// console.log("hi there !");
// setTimeout( ()=>{
//     console.log("Apna College");
// }, 4000);
// console.log("welcome to");

// setInterval
// let id =setInterval( ()=>{
//     console.log("Apna College");
// },2000);
// console.log(id);

// this with arrow functions
// const student ={
//     name: "pankaj",
//     marks : 95,
//     prpo : this, // global scope
//     getName: function(){
//         return this.name;
//     },
//     getmarks: function(){
//         return this.marks;
//     },
//     getInfo1: function(){
//         setTimeout(()=>{
//             console.log(this);
//         },2000);
//     },
//     getInfo2: function(){
//         setTimeout(function(){
//             console.log(this);
//         },2000);
//     }
// };
// console.log(student);
// console.log(student.getName());
// console.log(student.getmarks());
// console.log(student.getInfo1());
// console.log(student.getInfo2());

// let square = (a)=>{
//     console.log(a**2);
// }
// square(9);

// hello world 5 time 
// let id = setInterval(()=>{
//     console.log("Hello world");
// },2000);
// setTimeout(() => {
//     clearInterval(id);
//     console.log("work done");
// },10000);