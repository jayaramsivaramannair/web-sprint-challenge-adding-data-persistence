// build your server here and require it from index.js
const express = require('express')

const projectsRouter = require("./project/router.js")
const resourceRouter = require("./resource/router.js")
const taskRouter = require("./task/router.js")

const server = express()
server.use(express.json())

server.use(projectsRouter)
server.use(resourceRouter)
server.use(taskRouter)

server.use((err, req, res, next) => {
    console.log(err)

    res.status(500).json({
        message: 'Something went wrong',
    })
})


module.exports = server

