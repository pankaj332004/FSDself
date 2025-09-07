// events are signal that something has occurred. (user inputs / action)
// onclick()
// onmouseenter()
//et btns = document.querySelectorAll("button");


// btn.onclick = function() {
//     alert("button was clicked");
// };

// for(btn of btns){
//     console.dir(btn);
//     btn.onclick = sayHello;
//     btn.onmouseenter = function(){
//         console.log("you entered a button");
//     }
// }
// function sayHello(){
//     alert("hello");
// }

// eventlistener
//for(btn of btns){
    // btn.onclick = sayHello;
    // btn.onclick = sayName;
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    //btn.addEventListener("dblclick", function(){
    //    console.log("You double clicked me");
    //});
//}
// function sayHello(){
//     alert("hello");
// }
// function sayName(){
//     alert("Abes engineering college");
// }

// let btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//     console.log("generate random color");
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomcolor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("Color updated");
// });
// function getRandomcolor(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
//     let color = `rgb(${red}, ${blue},${green})`;
//     return color;
// }

// let p = document.querySelector('p');
// p.addEventListener("click", function(){
//     console.log("para was clicked");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter" , function(){
//     console.log("mouse inside box");
// });

// this in event listener
// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");

// btn.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor= "blue";
// });
// h1.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor= "blue";
// });
// h3.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor= "blue";
// });
// p.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor= "blue";
// });

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor= "blue";
// }

// btn.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);

// keyboard event
//let btn =document.querySelector("button");

// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked");
// })

// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button clicked");
// })

// let input = document.querySelector("input");

// input.addEventListener("keydown",function(){
//     console.log("key was pressed");
// });


// input.addEventListener("keyup",function(){
//     console.log("key = ",event.key);
//     console.log("code = ",event.code);
//     console.log("key was RELEASED");
// });

// input.addEventListener("keydown",function(){
//     console.log("code = ",event.code); // arrowup , arrowdown, arrowleft, arrowright
//     if(event.code == "ArrowUp" || event.code=="KeyU"){
//         console.log("character moves up");
//     }
//     else if(event.code == "ArrowDown" || event.code=="KeyD"){
//         console.log("character moves down");
//     }
//     else if(event.code == "ArrowLeft" || event.code=="KeyL"){
//         console.log("character moves left" || event.code=="KeyR");
//     }else if(event.code == "ArrowRight" || event.code=="KeyU"){
//         console.log("character moves right");
//     }
// });

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     // console.log("form submitted");
//     alert("form submitted");
// });

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();

    // let input = document.querySelector("input");
    // console.dir(input);
    // console.log(input.value); 

//     let user = form.elements[0];
//     let pass = form.elements[1];

//     console.log(user.value);
//     console.log(pass.value);
    
//     alert(`Hi ${user.value}, your password is set ${pass.value}`);
// });

// CHANGE EVENT AND INPUT EVENT
//change event :- the change event occurs when the value of an element has been changed(only works on <input>,<textarea> and <select> elements)
//input event :- the input event fire when the value of an <input>,<select>,or<textarea> element has been changed

let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
});

let user = document.querySelector("#user");
user.addEventListener("change",function(){
    console.log("change event");
    console.log("final value",this.value);
});
user.addEventListener("input",function(){
    console.log("input event");
    console.log("final value",this.value);
});