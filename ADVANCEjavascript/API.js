// let url ="https://catfact.ninja/fact";

// fetch(url).then((res)=>{
//     console.log(res);
//     return res.json();
// }).then((data)=>{
//         console.log("data1 = ",data.fact);
//         return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data2)=>{
//         console.log("data  = ",data2.fact)
//     })
// .catch((err)=>{
//     console.log("ERROR -",err);
// })

// using async await with the api
// async function getfact() {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     }catch(e){
//         console.log("error -",e);
//     }
//     console.log("bye")
// }
// getfact();

let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let fact= await getfact();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
})

let url ="https://catfact.ninja/fact";

async function getfact() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("error - ",e);
        return "No fact found";
    }
}