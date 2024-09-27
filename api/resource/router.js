// build your `/api/resources` router here
const express = require('express')
const Resources = require("./model.js")

const { validateResource, validateProjectID, checkDuplication } = require("./middleware.js")

const router = express.Router()

router.get("/api/resources", async (req, res, next) => {
    try {
        const resources = await Resources.findAll()
        res.status(200).json(resources)
    } catch (err) {
        next(err)
    }
})

router.post('/api/resources', validateResource, validateProjectID(), checkDuplication, async (req, res, next) => {
    try {
        const projectID = req.body.project_id;
        const resource = req.body;

        delete resource.project_id;
        const newResource = await Resources.add(projectID, resource)

        res.status(200).json(newResource)
    } catch (err) {
        next(err)
    }
})

module.exports = router
