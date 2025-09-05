// forEach
// let arr=[1,2,3,4,5];

// arr.forEach((el)=>{
//     console.log(el);
// });

// arr.forEach(function(el){
//     console.log(el);
// });

// let print = function(el){
//     console.log(el);
// };
// arr.forEach(print);

// let arr=[{
//     name: "Pankaj",
//     marks: 95
// },
// {
//     name:"Abhii",
//     marks:90
// },
// {
//     name:"Agrim",
//     marks:85
// }];
// console.log(arr);
// arr.forEach((student)=>{
//     console.log(student.marks);
// });


// Map funtion

// let num =[1,2,3,4];
// let double = num.map((el)=>{
//     console.log(el*el);
// });

// let num =[1,2,3,4];
// let double = num.map((el)=>{
//     console.log(8*el);
// });

// let student=[{
//     name: "Pankaj",
//     marks: 95
// },
// {
//     name:"Abhii",
//     marks:90
// },
// {
//     name:"Agrim",
//     marks:85
// }];
// let gpa = student.map((el) =>{
//     console.log(el.name);
//     console.log(el.marks/10);
// });

// filter function

// let nums = [1,2,3,4,7,8,2,9,10,21,66];
// let ans = nums.filter((el) => {
//     console.log(el%2==0);
//     // console.log(el%2!=0);
// })

// every method
// return true if every element of array give true for some function . Else return false
// let nums = [2,4,8,2,10,66];
// let ans = nums.every((el) => {
//     console.log(el%2==0);
//     console.log(el%2!=0);
// })

// reduce method 
// reduces the array to a single value
// let nums =[1,2,3,4];
// let final = nums.reduce((res,el)=>(res+el));
// console.log(final);

// explained how res store vale in the above code;
// let nums =[1,2,3,4];
// let final = nums.reduce((res,el)=>{
//     console.log(res);
//     return res+el;
// });
// console.log(final);

// use the reduce method to find maximum number in an array
// let nums = [2,3,4,5,6,4,7,8,1,2];
// let res =nums.reduce((max,el)=>{
//     if(el>max){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(res);

// check if all element are multiple of 10 or not;
// let arr =[10,20,30,40,50,60,70];
// let ans = arr.every((el)=>{
//     console.log(el%10==0);
// });

// use reduce method to find min element
// let nums = [2,3,4,5,6,4,7,8,1,2];
// let res =nums.reduce((min,el)=>{
//     if(el<min){
//         return el;
//     }else{
//         return min;
//     }
// });
// console.log(res);

// use concept of function
// function getMin(nums){
//     let res =nums.reduce((min,el)=>{
//     if(el<min){
//         return el;
//     }else{
//         return min;
//     }
//     });
//     console.log(res);
// }
// let nums=[2,3,4,5,6,4,7,8,1,2];
// getMin(nums);

// default parameters
// function sum(a,b=3){
//     console.log(a+b);
// };
// sum(1);

 // spread
 // it used to expand an iterable into multiple values
//  console.log(..."Pankaj");

// spread with array literals
// let arr =[1,2,3,4,5];
// let newArr =[...arr];
// console.log(newArr);
// newArr.push(9);
// console.log(newArr);
// console.log(..."Abhishek Pathak");

// let odd  = [1,3,5,7,9];
// let even = [2,4,6,8];
// let nums=[...odd, ...even];
// console.log(nums);

// spread with object literals
// let data = {
//     email : "ironman@gmail.com",
//     password : "pankaj3333333",
// };
// const datacopy = {...data, id:1234,country:"India"};
// console.log(datacopy);
// let arr = [1,2,3,4,5];
// let obj1 ={...arr};
// console.log(obj1); // obj -> key:val it will take key as a index

// let obj2 = {..."Pankaj"};
// console.log(obj2);

// REST
// allow a function to take an indefinitev number of arguments and them in an array
// let final = function sum(...args){
//     return args.reduce((add , el)=> add+el);
// };
// sum(2,3);
// console.log(final);
// function min(){
//     console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(1);
// };
// min();

// let val = function min(msg,...args){
//     console.log(msg);
//     return args.reduce((min,el) =>{
//         if(min > el){
//             return el;
//         }else{
//             return min;
//         }
//     });

// }
// min("hello",45,4569,896,21,33,78);
// console.log(val);

// destructuring
// storing values of array into multiple variables
// let names = ["tony","Pankaj","Rajbhar","Abhii"];
// let [winner , runnerup,...others]=names;
// names = console.log(winner , runnerup,...others);

 // destructuring of the object;

//  const student ={
//     name :"pankaj",
//     age :22,
//     class : "Btech",
//     subject :["computer application", "dbms","os","daa"],
//     username : "pankaj@123",
//     password : "12334455",
//  };
//  let {username,password}=student;
//  console.log(username);
//  console.log(password);
//  let {username:user,password:secret}=student;
//  console.log(user);
//  console.log(secret);

// //q1
// let nums=[1,2,3,4,5];
// const square=nums.map((num)=>num*num);
// console.log(square);
// let sum=square.reduce((acc,cur)=>acc+cur,0);
// let avg=sum/nums.length;
// console.log(avg);
// //q2
// let numbers=[2,4,6,8,-2,-4];
// console.log(numbers.map((number)=>number+5));
// // q3
// let strings=["adam","bob","catlyn","donald","eve"];
// console.log(strings.map((string)=>string.toUpperCase()));
// //q4
// const doubleAndReturnArgs=(arr,...args)=>[
//     ...arr,
//     ...args.map((v)=>v*2),
// ];
// doubleAndReturnArgs([1,2,3],4,4);//[1,2,3,8,8]
// doubleAndReturnArgs([2],10,4);//[2,20,8]
// //q5
// const mergeObjects=(obj1,obj2)=>({...obj1,...obj2});
// mergeObjects({a:1,b:2},{c:3,d:4});//{a:1,b:2,c:3,d:4}

