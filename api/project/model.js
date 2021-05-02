// build your `Project` model here
const db = require("../../data/dbConfig.js")

function findAll() {
    return db('projects as p')
}

module.exports = {
    findAll,
}
