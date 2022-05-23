const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const app = express();

// middlewares
app.use("/books", router)// localhost:5000/books

mongoose.
connect(
    "mongodb+srv://admin:zLzRm13P7Jg83hF0@cluster0.tnybv.mongodb.net/noodStore?retryWrites=true&w=majority"
)
.then(() => console.log("Connected To Database"))
.then(() => {
    app.listen(5000)
}).catch((err) => console.log(err)); 
//zLzRm13P7Jg83hF0