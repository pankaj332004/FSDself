const express = require("express");
const app = express();

const port = 8080;

// app.use((req,res,next)=>{
//     console.log("Middleware 1st function executed");
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("Middleware 2nd function executed");
//     next();
//     console.log("Response has been sent");
// });

// app.use((req, res, next) => {
//     req.requestTime = new Date.toISOString();
//     console.log(`[${req.method}] ${req.url} at ${req.requestTime}`);
//     next();
// });

// app.use((req, res, next) => {
//     console.log("I am only for /random endpoint");
//     next();
// });

// app.use('/api',(req, res, next) => {
//     let {token} = req.query;
//     if(token==="give-acess"){
//         next();
//     }
//     else{
//         res.send("Access Denied");
//     }
// });

// const checkToken =(req, res, next) => {
//     let {token} = req.query;
//     if(token==="give-acess"){
//         next();
//     }
//     else{
//         res.send("Access Denied");
//     }
// };

// app.get('/api',checkToken, (req, res) => {
//     res.send("this is the api endpoint");
// });

app.get("/wrong",(req,res)=>{
    abcd=abcd;
})

app.get('/', (req, res) => {
    res.send('Hello, I am a middleware example!');
});

app.get('/random', (req, res) => {
    res.send("this is the random endpoint");
});

app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});