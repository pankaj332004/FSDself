// let smallImages = document.getElementsByClassName("oldImg");
// for(let i=0;i<smallImages.length;i++){
//     console.dir(smallImages[i]);
// }

// let smallImages = document.getElementsByClassName("oldImg");
// for(let i=0;i<smallImages.length;i++){
//     smallImages[i].src = "spiderman_img.png";
//     console.log(`Value of image no. ${i} ids changed`);
// }

// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelector("div a"));

// console.dir(document.querySelectorAll("p"))
// console.dir(document.querySelectorAll("div a"));

// setting content in object
let para = document.querySelector('p');
// console.log(para);
// console.dir(para);
// innertext - shows the visible text contained in a node
// console.log(para.innerText);
// innerHTML - shows all the full markup
// console.log(para.innerHTML);
// shows all the text;
// console.log(para.textContent);
// para.innerText = "abc";
// console.log(para.innerText);
// para.innerText="hi , Iam peter parker";
// console.log(para.innerText);
// para.innerText="hi , I am <b>peter parker</b>!";
// console.log(para.innerText);
// para.innerHTML="hi , I am <b>peter parker</b>!";
// console.log(para.innerHTML);
// let heading = document = document.querySelector('h1');
// console.log(heading.innerText);
// console.log(heading);
// heading.innerHTML=`<u>${heading.innerText}</u>`;

// attributes manipulating
//let img = document.querySelector('img');
// console.log(img);
// img.getAttribute('id');
// img.setAttribute('id','spidermanImg');

// console.log(img.getAttribute('class'));
// img.setAttribute('class','images');
// console.log(img.getAttribute('class'));

// style manipulating
// let img = document.querySelector('p');
// console.dir(img);
// console.log(img.style);
// let heading = document.querySelector('h1');
// console.log(heading.style);
// console.log(heading.style.color = 'purple');
// console.log(heading.style.backgroundColor='yellow');
// let links = document.querySelectorAll(".box a");
// // for(let i=0;i<links.length;i++){
// //     links[i].style.color="green";
// // }
// for(link of links){
//     link.style.color ="skyblue";
// }

// let box = document.querySelector('.box');
// console.log(box.style);

// manipulating style using classList
//obj.classList
//classList.add() to add new class
// classList.remove() to remove class
// classList.contains() to check if class exist
// classList.toggle() to toggle between add and remove

// // add
// let heading = document.querySelector('h1');
// console.log(heading.classList);
// console.log(heading.classList.add('green'));
// console.log(heading.classList.add('underline'));
// // remove
// console.log(heading.classList.remove('green'));
// //console.log(heading.classList.remove('underline'));
// // contains
// console.log(heading.classList.contains("underline"));
// // toggle
// console.log(heading.classList.toggle("green"));
// console.log(heading.classList.toggle("underline"));
// console.log(heading.classList.toggle("green"));

// let box = document.querySelector(".box");
// console.log(box.classList);
// console.log(box.classList.add("yellowbg"))

// navigation
// let h4 =document.querySelector('h4');
// console.log(h4.parentElement);
// console.log(h4.children);
// let box = document.querySelector('.box');
// console.log(box.children);
// console.log(box.childElementCount);
// let ul = document.querySelector('ul');
// console.log(ul.parentElement);
// console.log(ul.childElementCount);
// console.log(ul.children);
// console.log(ul.children[0]);
// console.log(ul.children[1]);
// console.log(ul.children[2]);
// console.log(ul.children[2].previousElementSibling);
// console.log(ul.children[1].previousElementSibling);
// console.log(ul.children[1].nextElementSibling);

// let img = document.querySelector('img');
// console.log(img.previousElementSibling);
// console.log(img.previousElementSibling.style);
// console.log(img.previousElementSibling.style.color="green");

//adding element to the document
// appendChild(element)
// append(element) add the eleemnt in the last
// prepend(element) add the element in the previous position given
// insertAdjacent(where , element)
// remove child()
// remove()

// // appendchild
// let newp = document.querySelector('p');
// console.dir(newp);
// console.log(newp.innerText="Hi, I am a new p");
// console.dir(newp);
// let body = document.querySelector('body');
// console.log(body.append(newp));
//  let box = document.querySelector('.box');
// console.log(box.appendChild(newp));
// let btn = document.createElement('button');
// console.dir(btn);
// btn.innerText = "click me!";
// box.appendChild(btn);

// append element

// // q1
// // .red{
// //     color:red ;
// // }
// let para1 = document.createElement('p');
// para1.innerText("hey I'm red");
// document.querySelector('body').append(para1);

// para1.classList.add("red");
// // q2
// // .blue{
// //     color : blue;
// // }
// let h3 = document.createElement('h3');
// h3.innerText("hey I'm blue");
// document.querySelector('body').append(h3);

// para1.classList.add("blue");

// // q3 
// // .box{
// //     border : 1px solid black;
// //     background-color: pink;
// // }
// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");
// h1.innerText="I am in a  div";
// para2.innerText ="ME TOO!";
// div.append(h1);
// div.append(para2);
// div.classList.add("box");
// document.querySelector("body").add(div);

// // ans 1
// let button=document.createElement("button"); 
// let input=document.createElement("input");
// button.innerText="Clickme";
// document.querySelector("body").append(input);
// document.querySelector("body").append(button);

// // ans 2
// button.setAttribute("id","btn");
// input.setAttribute("placeholder","username");

// //Ans3
// let btn=document.querySelector("#btn");
// btn.classList.add("btnStyle");

// //Ans4
// let h1=document.createElement("h1");
// h1.innerHTML="<u>DOMPractice</u>";
// document.querySelector("body").append(h1);

// //Ans5
// let p=document.createElement("p");
// p.innerHTML="ApnaCollege<b>Delta</b>Practice";
// document.querySelector("body").append(p);
