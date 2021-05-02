// build your `/api/resources` router here
const express = require('express')
const Resources = require("./model.js")

const router = express.Router()

router.get("/api/resources", async (req, res, next) => {
    try {
        const resources = await Resources.findAll()
        res.status(200).json(resources)
    } catch (err) {
        next(err)
    }
})

module.exports = router
