const express = require("express");
const app = express();

app.use(express.json());


const mongoose = require("mongoose");

const Connect = () => {
    return mongoose.connect("mongodb://localhost:27017/bookSystem");
}

app.listen(2345, async () => {
    try{
        await Connect();
        console.log("Listening at 2345");
    }
    catch(err){
        console.log(err);
    }
})