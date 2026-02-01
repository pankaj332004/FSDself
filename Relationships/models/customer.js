const mongoose = require("mongoose");
const {Schema} = mongoose;

// one to many
main().then(()=> console.log("Connected successfully"))
.catch((err)=> console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
    item : String,
    price: Number,
});

const customerSchema = new Schema({
    name:String,
    orders:[
        {
            type: Schema.Types.ObjectId,
            ref:"order",
        },
    ],
});

// customerSchema.pre("findOneAndDelete", async ()=>{
//     console.log("Pre Middleware");
// })

customerSchema.post("findOneAndDelete", async(data)=>{
    console.log("Post Middleware");
})

const order = mongoose.model("order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);

// const findCustomer = async()=>{
//     let result = await Customer.find({}).populate("orders");
//     console.log(result[0]);
// };

// findCustomer();


// const addCustomer = async ()=>{
//     let cust1 = new Customer({
//         name:"Pankaj Kumar Rajbhar",
//     });

// // Use findOne instead of find (returns a single document)
//   let order1 = await order.findOne({ item: "chips" });
//   let order2 = await order.findOne({ item: "samosa" });
//   let order3 = await order.findOne({ item: "Chocolate" });

//   // Push only the _id values
//   if (order1) cust1.orders.push(order1);
//   if (order2) cust1.orders.push(order2);
//   if (order3) cust1.orders.push(order3);

    
//     let res = await cust1.save();
//     console.log(res);


//};

//addCustomer();

// const addOrder = async () =>{
//     let res = await order.insertMany([
//         {item: "samosa",price:12},
//         {item:"chips",price:10},
//         {item:"Chocolate",price:40},
//     ]);
//     console.log(res);
// };

// addOrder();

const addCust = async ()=>{
    let newCust = new Customer({
        name:"Karan Arjun",
    });
    
    let newOrder = new order({
        item:"Burger",
        price: 100,
    });

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();
};

addCust();

const delCust = async ()=>{
    let data = await Customer.findByIdAndDelete('697eeb33429da43d5b32a564');
    console.log(data);
}

delCust();
