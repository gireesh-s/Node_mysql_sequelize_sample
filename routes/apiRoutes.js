const express = require("express");
const router = express.Router();
const db = require("../models")

router.get("/all", (req, res) => {
    db.Todo.findAll().then(todo => res.send(todo));
});

router.get("/view/:id", (req, res) => {
    db.Todo.findOne({
        where: {
            id: req.params.id
        }
    }).then(todo => res.send(todo));
});

router.post("/add", (req, res) => {
    db.Todo.create({
        text: req.body.text
    }).then(data => res.send(data));
})

router.delete("/delete/:id", (req, res) => {
    db.Todo.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send({ message: "Deleted"}));
});

router.put("/edit/:id", (req, res) => {
    db.Todo.update({
        text: req.body.text
    }, {
        where: {
            id: req.params.id
        }
    }).then(() => res.send({ message: "Updated"}));
});

module.exports = router