const express = require("express");
const router = express.Router();

let projects = [{ id: 1, name: "Mint", description: "App Dental" }];

// GET /
router.get("/", (req, res) => res.json(projects));

// GET /:id
router.get("/:id", (req, res) => {
    const project = projects.find((p) => p.id == req.params.id);
    project
        ? res.json(project)
        : res.status(404).json({ message: "Proyecto no encontrado" });
});

// POST /
router.post("/", (req, res) => {
    const { name, description } = req.body;
    const newProject = { id: projects.length + 1, name, description };
    projects.push(newProject);
    res.json({ message: "Proyecto creado" });
});

// PUT /:id
router.put("/:id", (req, res) => {
    const { name } = req.body;
    const project = projects.find((p) => p.id == req.params.id);
    if (project) {
        project.name = name || project.name;
        res.json({ message: "Proyecto actualizado" });
    } else res.status(404).json({ message: "Proyecto no encontrado" });
});

// DELETE /:id
router.delete("/:id", (req, res) => {
    projects = projects.filter((p) => p.id != req.params.id);
    res.json({ message: "Proyecto eliminado" });
});

module.exports = router;
