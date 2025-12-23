const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("Connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model('User', userSchema);
const Employee = mongoose.model('Employee', userSchema);

// const user1 = new User({
//     name: "Pankaj Kumar Rajbhar",
//     email:"pk902124@gmail.com",
//     age: 22,
// });

// user1.save().then(()=>{
//     console.log("Data saved successfully");
// }).catch((err)=>{
//     console.log(err);
// });

// const user2 = new User({
//     name: "Raj Singh",
//     email:"raj6393@gmail.com",
//     age: 21,
// });

// user2.save().then(()=>{
//     console.log("Data saved successfully");
// }).catch((err)=>{
//     console.log(err);
// });

// User.insertMany([
//     {
//         name: "Priya Sharma",
//         email: "sharma@gmail.com",
//         age: 20,
//     },
//     {
//         name: "Rohan Kumar",
//         email: "rohan@gmail.com",
//         age: 23,
//     },
//     {
//         name: "Anjali Verma",
//         email: "anjali@gmail.com",
//         age: 22,
//     }
// ]).then(()=>{
//     console.log("Multiple document inserted successfully");
// }).catch((err)=>{
//     console.log(err);
// });

// User.findOne({age: {$lte:22}}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

// User.findById("694995d50760f88bff862e4b").then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

// User.updateOne({name: "Raj Singh"},{age:24})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.updateMany({age:{$gt:22}},{age:55})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.findOneAndUpdate({name:"Priya Sharma"},{age:22},{new:true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findByIdAndUpdate("6949982733f3439af2d37d89",{age:23},{new:true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.deleteOne({name:"Rohan Kumar"})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.deleteMany({age:22})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

User.findByIdAndDelete("6949982733f3439af2d37d89")
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});