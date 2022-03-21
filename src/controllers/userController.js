const express = require("express");

const router = express.Router();

const {body, validationResult} = require("express-validator");

const Upload = require("../middlewares/uploads");

const User = require("../models/user.model")

router.post("/users", async (req, res) => {
    try{
        const user = await User.create(req.body);
        return res.status(201).send(user);
    }
    catch(er){
        return res.status(500).send({message: er.message});
    }
})