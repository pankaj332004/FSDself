// console.log("Hello Duniya!!");
// console.log("Pankaj Kumar Rajbhar");
// let a = 10;
// let b = 20;
// console.log("Sum is",a+b);

// let pencilPrice = 10;
// let eraserPrice = 5;
// //let output = "The total price is : " + (pencilPrice + eraserPrice) + " Rupees";
// //let output1 = `The total price is : ${pencilPrice} Rupees.`;
// console.log(output);
// console.log(output1);

// conditional statements
// console.log("before my if statment");
// let age = 23;
// if(age>=18){
//     console.log("You are able to vote");
// }
// else{
//     console.log("You are not able to vote");
// }

//ques
// let color = "red";
// if(color=="red"){
//     console.log("stop");
// }
// if(color == "yellow"){
//     console.log("Start your vehical for go");
// }
// if(color == "green"){
//     console.log("move")
// }

// else if statement
// let age=14;
// if(age >= 18){
//     console.log("you can vote");
// }
// else if(age<18){
//     console.log("You cannot vote");
// }

// let marks = 88;
// if(marks>90 && marks<=100){
//     console.log("A+");
// }
// else if(marks>80 && marks<=90){
//     console.log("A");
// }
// else if(marks>70 && marks <=80){
//     console.log("B+");
// }
// else if(marks>50 && marks<=60){
//     console.log("B");
// }
// else if(marks>40 && marks<=50){
//     console.log("C");
// }
// else{
//     console.log("F");
// }

// let num = 10;
// if((num%3===0) && ((num+1==11) || (num-1==11))){
//     console.log("safe");
// }else{
//     console.log("unsafe");
// }

// let str =" ";
// if(String){
//     console.log("String is empty");
// }
// else{
//     console.log("String is not empty");
// }

// switch
// let color = "red";
// switch(color){
//     case "red" :
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("Slow down");
//         break;
//     case "green":
//         console.log("GO");
//         break;
//     default:
//         console.log("Broken light");
// }

// let day=7;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("wrong entry");
// }

// alert & prompt
//alert{"Something is wrong"};
//console.error("something is wrong");

// prompt
// let name = prompt("Enter your name : ");
// console.log("welcome",name );

// let msg = "     hello    ";
// console.log(msg.trim());

// let password = prompt("set your password");
// console.log(password.trim());

// let str = "Pankaj";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// argument
// let str = "Ilovefood";
// console.log(str.indexOf("love")); // index of word 
// console.log(str.indexOf("abhii")); // not found then -1

//slice
// let str = "Pankaj Kumar rajbhar";
// console.log(str.slice(0,6));
// console.log(str.slice(-5));

//replace 
//  let str = "Ilovecoding";
//  console.log(str.replace("love","enjoy"));

// repeat
// let str = "Mango";
// console.log(str.repeat(6));

// an array is the linear data structure / collection of things
// let stu1 ="Pankaj";
// let stu2 ="Agrim";
// let stu3 ="Abhii";

// let stu =["Pankaj","Abhii","Agrim"];
// console.log(stu);

// let name="rohit";
// name[0]='m';
// console.log(name);

// array methods
// let arr = ["audi","bmw","maruti","xuv"];
// console.log(arr);
// console.log(arr.push("toyota"));
// arr.push("ferrari");
// //arr.pop()
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift();
// console.log(arr);

// let months = ["jan","july","march","august"];
// console.log(months);
// months.shift();
// months.shift();
// months.unshift("june");
// months.unshift("july");
// console.log(months);

// indexof
// let primary = ["Pankaj","Kumar","Rajbhar"];
// console.log(primary.indexOf("Pankaj")); // 0
// console.log(primary.includes("abhii")); // false becoz not found

// concatenation
// let first = ["pankaj","agrim","abhii"];
// let second = ["ritesh","ritik","raj"];
// console.log(first.concat(second));
// console.log(second.concat(first));


//reverse
// console.log(second.reverse());

// slice
// let color =["red","blue","black","purple","green","pink"];
// console.log(color.slice());
// console.log(color.slice(2));
// console.log(color.slice(2,5));

// splice method
// let color = ["red","yellow","blue","orange","pink","white"];
// console.log(color.splice(4));
// console.log(color);
// console.log(color.splice(0,1));
// console.log(color);
// console.log(color.splice(0,1,"black","grey"));
// console.log(color);

// sort
// let num = [1,2,3,5,6,4,8,9,8];
// console.log(num.sort());
//  let month =["jan","july","march","august"];
//  console.log(month.splice(0,2,"july","june"));
//  console.log(month);

// let lang = ["c","c++","html","javascript","python","java","c#","sql"];
// console.log(lang.reverse().indexOf("javascript"));
// console.log(lang);

// const arr =[10,20,30,40,50,60];
// console.log(arr);

// nested arrays
// let nums=[[2,4],[3,6],[4,8]];
// console.log(nums);
// console.log(nums[2][1]);

// tic tae toe
// let tic =[["x",null,"o"],[null,"x",null],["o",null,"x"]];
// console.log(tic);

// let arr = [7,9,0,-2];
// let n=3;
// console.log(arr.slice(0,n));
// let len = arr.length;
// console.log(arr.slice(len-n));