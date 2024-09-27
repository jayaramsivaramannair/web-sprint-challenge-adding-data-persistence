const validateProject = (req, res, next) => {

    const newProject = req.body
    if (!newProject.project_name) {
        return res.status(400).json({
            message: 'project_name field is required',
        })
    }
    next()
}

module.exports = {
    validateProject,
}