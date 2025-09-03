// for loop
// for(let i=0;i<5;i++){
//     console.log(i+1);
// }

// while loop
// let i = 0;
// while(i<5){
//     console.log(i+1);
//     i++;
// }

// do while loop 
// let i = 0;
// do{
//     console.log(i+1);
//     i++;
// }while(i<5);

// print odd
// let n = prompt("Enter the number : ");
// for(let i=1;i<n;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

//print even
// let n = prompt("Enter the number : ");
// for(let i=1;i<n;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// infinte loop
// for(let i=10;i>1;i++){
//     console.log(i);
// }

// multiplication table
// let n =prompt("Enter the number for multiplication :");
// for(let i=1;i<=10;i++){
//     console.log(n,'x',i,'=',n*i);
// }

// nested for loop
// for(let i=0;i<5;i++){
//     for(let j=i;j<5;j++){
//         console.log('*');
//     }
//     console.log("outer loop"); 
// }

// favorite movie
// const favar = "Ironman";
// let guess = prompt("get my favar movie : ");
// while((guess != favar)&&(guess != "quite")){
//     console.log("Wrong guess!");
//     guess = prompt("get my favar movie : ");
// }
// if(guess == favar){
//     console.log("congrants!");
// } else{
//     console.log("quite!");
// }

// loops with array
// let fruits =["mango","apple","banana","litchi","orange"];
// for(let i=0;i<fruits.length;i++){
//     console.log(i+1,fruits[i]);
// }

// nested loop with array
// let heros =[
//     ["ironman", "spiderman","thor"],
//     ["superman","wonder woman","flash"]
// ]
// for(let i=0;i<heros.length;i++){
//     console.log(i,heros[i],heros[i].length);
//     for(let j=0;j<heros[i].length;j++){
//         console.log(`j=${j},${heros[i][j]}`);
//     }
// }

// for of loop
// let arr =["mango","apple","banana","orange","guava"];
// for(fruit of arr){
//     console.log(fruit);
// }

//factorial
// let n = prompt("Enter the number you want to get factorial :");
// let fact=1;
// for(let i=n;i>=1;i--){
//     fact *= i;
// }
// console.log(fact);

// digit sum
// let num = prompt("Enter the number you want to get sum :");
// let sum=0;
// while(num!=0){
//     sum = sum+num%10;
//     num=Math.floor(num/10);
// }
// console.log(sum);

// count digit
// let num = prompt("Enter the number you want to get sum :");
// let count=0;
// while(num!=0){
//     count++;
//     num=Math.floor(num/10);
// }
// console.log(count);

// largest number
let num = prompt("Enter the size of array : ");
let arr=prompt("enter the element : ");
for(let i=0;i<num-1;i++){
    arr=prompt("enter the element : ");
}
let max = arr[0];
for(let i=0;i<num;i++){
    if(max<arr[i]){
        max=arr[i];
    }
}
console.log(max);

