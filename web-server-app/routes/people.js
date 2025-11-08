const express = require("express");
const router = express.Router();

let people = [{ id: 1, name: "James", email: "j@correo.com", role: "Dev" }];

// GET /
router.get("/", (req, res) => res.json(people));

// GET /:id
router.get("/:id", (req, res) => {
    const person = people.find((p) => p.id == req.params.id);
    person
        ? res.json(person)
        : res.status(404).json({ message: "Persona no encontrada" });
});

// POST /
router.post("/", (req, res) => {
    const { name, email, role } = req.body;
    const newPerson = { id: people.length + 1, name, email, role };
    people.push(newPerson);
    res.json({ message: "Persona creada" });
});

// PUT /:id
router.put("/:id", (req, res) => {
    const { role } = req.body;
    const person = people.find((p) => p.id == req.params.id);
    if (person) {
        person.role = role || person.role;
        res.json({ message: "Persona actualizada" });
    } else res.status(404).json({ message: "Persona no encontrada" });
});

// DELETE /:id
router.delete("/:id", (req, res) => {
    people = people.filter((p) => p.id != req.params.id);
    res.json({ message: "Persona eliminada" });
});

module.exports = router;
