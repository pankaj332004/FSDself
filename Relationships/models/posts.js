const mongoose = require("mongoose");
const {Schema} = mongoose;

// one to Squillions
main().then(()=>{
    console.log("connected successfully");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
};

let userSchema = new Schema({
    username: String,
    email: String,
});

let postSchema = new Schema({
    content: String,
    likes: Number,
    user :{
        type: Schema.Types.ObjectId,
        ref : "User",
    },
});

const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);

// const addData = async ()=>{
//     // let user1 = new User({
//     //     username:"PankajKumar",
//     //     email:"pankaj@gmail.com",
//     // });

//     let user = await User.findOne({username:"PankajKumar"})

//     let post2 = new Post ({
//         content:"Hello World!",
//         likes:7,
//     });

//     post2.user=user;
    
//     await post2.save();
// };

// addData();

const getData = async() =>{
    let result = await Post.findOne({}).populate("user","username");
    console.log(result);
}
getData();