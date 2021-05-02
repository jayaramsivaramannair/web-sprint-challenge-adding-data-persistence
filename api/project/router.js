// build your `/api/projects` router here
const express = require('express')
const Projects = require("./model.js")
const { validateProject } = require("./middleware.js")

const router = express.Router()

router.get("/api/projects", async (req, res, next) => {
    try {
        const projects = await Projects.findAll()

        const mutatedProjects = projects.map((project) => {
            return { ...project, project_completed: (project.project_completed === 0) ? false : true }
        })

        res.status(200).json(mutatedProjects)

    } catch (err) {
        next(err)
    }
})

router.post('/api/projects', validateProject, async (req, res, next) => {
    try {
        const project = await Projects.add(req.body)
        res.status(200).json({ ...project, project_completed: (project.project_completed === 0) ? false : true })

    } catch (err) {
        next(err)
    }
})

module.exports = router
