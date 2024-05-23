const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get("/", (req, res) => {
    res.render("foods/index.ejs", {
        pantry: res.locals.user.pantry
    })
})

router.get("/new", (req, res) => {
    res.render("new.ejs")
})

router.post("/", async (req, res) => {
    try {
    // if (req.body.isVegetarian === "on") {
    //     req.body.isVegetarian = true
    // } else {
    //     req.body.isVegetarian = false
    // }
    // if (req.body.isVegan === "on") {
    //     req.body.isVegan = true
    // } else {
    //     req.body.isVegan = false
    // }
    // currentUser.pantry.push(req.body)
    // = lines 28-31 do exactly the same as the above code
    const isVegetarian = req.body.isVegetarian === "on"
    const isVegan = req.body.isVegan === "on"
    const currentUser = await User.findById(req.session.user._id)
    currentUser.pantry.push({ ...req.body, isVegetarian: isVegetarian, isVegan: isVegan })
    await currentUser.save()
    res.render("foods/index.ejs", {
        pantry: currentUser.pantry
    })
    } catch (error) {
        console.log(error.message)
        res.redirect("/")
    }
})

module.exports = router;
