const validateTask = (req, res, next) => {
    const newTask = req.body

    if (!newTask.task_description || !newTask.project_id) {
        return res.status(400).json({
            message: 'task_description and project_id fields are required'
        })
    }
    next()
}

module.exports = {
    validateTask,
}