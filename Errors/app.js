const express = require('express');
const app = express();
const port = 8080;
const expressError = require('./expressError');

// const checkToken = (req, res, next) => {
//     const token = req.query.token;
//     if (token === 'secret123') {
//         return next();
//     }
//     throw new expressError("Unauthorized! Invalid or missing token.", 401);
// };

// app.use('/protected', checkToken, (req, res) => {
//     res.send("Welcome to the protected route!");
// });

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// app.get('/err', (req, res) => {
//     abcd=abcd;
// });

// app.use((err, req, res, next) => {
//     let {status , message} = err;
//     res.status(status).send(message); // res.status().send()  or    

// });

// app.use((err, req, res, next) => {
//     console.error("-------ERROR-------");
//     next(err); // not to pass the next() alone into error handling middleware 
//     // because it will be treated as normal middleware
//     // so we have to pass the err object to next() LIKE THIS: next(err)
// });

// app.use((err, req, res, next) => {
//     console.log("*******CUSTOM ERROR HANDLER *******");
//     res.send(err);
// });

// app.use((req,res)=>{
//     res.status(404).send("Page Not Found");
// })

// Activity:-
// app.get('/admin', (req, rest) => {
//     throw new expressError(403,"You are not an admin!");
// });
