const express = require("express");
const router = express.Router();
const User = require("../models/user")


router.post("/test", async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})




module.exports = router;