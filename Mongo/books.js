const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("Connection Successfully");
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://Localhost:27017/amazon")
}

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxLength: 20,
    },
    author:{
        type: String,
    },
    price:{
        type: Number,
    },
    discount:{
        type: Number,
        default: 0,
    },
    category:{
        type: String,
        enum: ["fiction", "non-fiction"],
    },
    genre:[String],
})

const Book = mongoose.model("Book",bookSchema);

// let book1 = new Book({
//     title: "The Great Gatsby",  
//     author: "F. Scott Fitzgerald",
//     price: 10.99,
// });

// let book2 = new Book({
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     price: 8.99,
// });

// let book3 = new Book({
//     title: "Math for Beginners",
//     author: "John Doe",
//     price: 15.00,
//     discount: 2.00,
// });

// let book4 = new Book({
//     title: "A Very Long Book",
//     author: "Jane Smith",
//     price: 12.50,
//     genre: ["education", "reference"],
// });

// book4.save().then(( res )=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

Book.findByIdAndUpdate("694a3973ef2ba8036ad2e469",{discount:5},{new:true,runValidators:true})
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})