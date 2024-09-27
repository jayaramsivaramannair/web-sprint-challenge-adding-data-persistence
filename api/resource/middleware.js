const Projects = require("../project/model.js");
const Resources = require("../resource/model.js");

const validateProjectID = () => {
    return (req, res, next) => {
        Projects.findById(req.body.project_id)
            .then((project) => {
                if (project) {
                    next()
                } else {
                    res.status(404).json({
                        message: `Project with ID ${req.body.project_id} does not exist`,
                    })
                }
            })
            .catch((err) => {
                next(err)
            })
    }
}

const validateResource = async (req, res, next) => {
    const newResource = req.body

    if (!newResource.resource_name || !newResource.project_id) {
        return res.status(400).json({
            message: 'resource_name and project_id fields are required',
        })
    } else {
        next()
    }
}

const checkDuplication = async (req, res, next) => {
    try {
        const resources = await Resources.findAll()

        const duplicateValue = resources.filter((resource) => {
            return resource.resource_name === req.body.resource_name
        })

        if (duplicateValue.length > 0) {
            return res.status(400).json({
                message: 'This resource already exists!'
            })
        } else {
            next()
        }

    } catch (err) {
        next(err)
    }

}

module.exports = {
    validateResource,
    validateProjectID,
    checkDuplication,
}