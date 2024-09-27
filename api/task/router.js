// build your `/api/tasks` router here
const express = require('express')
const Tasks = require("./model.js")
const { validateTask } = require('./middleware.js')
const { validateProjectID } = require('../resource/middleware.js')

const router = express.Router()

router.get("/api/tasks", async (req, res, next) => {
    try {
        const tasks = await Tasks.findAll()

        const mutatedTasks = tasks.map((task) => {
            return { ...task, task_completed: (task.task_completed === 0) ? false : true }
        })
        res.status(200).json(mutatedTasks)

    } catch (err) {
        next(err)
    }
})

router.post("/api/tasks", validateTask, validateProjectID(), async (req, res, next) => {
    try {
        const newTask = await Tasks.add(req.body)
        res.status(200).json({ ...newTask, task_completed: ((newTask.task_completed) === 0 ? false : true) })

    } catch (err) {
        next(err)
    }
})

module.exports = router
