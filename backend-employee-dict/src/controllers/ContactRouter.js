const express = require("express");
const { Contact } = require("../models/Contact");
const router = express.Router();

router.get("/", (request, response) => {
    response.json({
        message: "Contact router activated!"
    });
});


// GET localhost:3000/contacts/all
router.get("/all", async(request, response) => {
    let results = await Contact.find().exec();
    console.log("found documents")
    console.log(results)
    response.json({
        message: "Found documents!",
        data: results
    });
});

// GET localhost:3000/contacts/1234
// VERB ip:port/controller/:id
router.get("/:id", async(request, response) => {
    let results = await Contact.findById(request.params.id).exec();
    console.log("found documents")
    console.log(results)
    response.json({
        message: "Found documents!",
        data: results
    });
});


// POST localhost:3000/contacts/
router.post("/", async(request, response) => {
    let results = await Contact.create(request.body);
    console.log("created documents")
    console.log(results)
    response.json({
        message: "Created documents!",
        data: results
    });
});

// PATCH localhost:3000/contacts/1234
router.patch("/:id", (request, response) => {

});

// DELETE localhost:3000/contacts/1234
router.delete("/:id", (request, response) => {

});



module.exports = router;