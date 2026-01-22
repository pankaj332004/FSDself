const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://Localhost:27017/whatsapp");
}
let allChats = [
    {
        from : "Raj Singh",
        to : "Pankaj Kumar Rajbhar",
        msg: "Hello Pankaj, how are you?",
        created_at : new Date(),
    },
    {
        from : "Pankaj Kumar Rajbhar",
        to : "Raj Singh",
        msg: "I am fine, Raj! What about you?", 
        created_at : new Date(),
    },
    {
        from : "Raj Singh",
        to : "Pankaj Kumar Rajbhar",
        msg: "I am doing great, thanks for asking!", 
        created_at : new Date(),
    },
    {
        from : "Pankaj Kumar Rajbhar",
        to : "Raj Singh",
        msg: "That's good to hear. Let's catch up sometime soon.", 
        created_at : new Date(),
    },
    {
        from : "Raj Singh",
        to : "Pankaj Kumar Rajbhar",
        msg: "Sure, looking forward to it!", 
        created_at : new Date(),    
    },
    {
        from : "Pankaj Kumar Rajbhar",
        to : "Raj Singh",
        msg: "Great! I'll call you later this week to set something up.", 
        created_at : new Date(),
    },{
        from : "Raj Singh",
        to : "Pankaj Kumar Rajbhar",
        msg: "Sounds good. Talk to you soon!", 
        created_at : new Date(),
    },
    {
        from : "Pankaj Kumar Rajbhar",
        to : "Raj Singh",
        msg: "Bye for now!", 
        created_at : new Date(),
    },{
        from : "Raj Singh",
        to : "Pankaj Kumar Rajbhar",
        msg: "Bye!", 
        created_at : new Date(),
    },{
        from : "Pankaj Kumar Rajbhar",
        to : "Raj Singh",
        msg: "Take care!", 
        created_at : new Date(),
    },{
        from : "Raj Singh",
        to : "Pankaj Kumar Rajbhar",
        msg: "You too!", 
        created_at : new Date(),
    },
];
Chat.insertMany(allChats)
.then(function(){
    console.log("Data inserted")  // Success
}).catch(function(error){
    console.log(error)      // Failure
});