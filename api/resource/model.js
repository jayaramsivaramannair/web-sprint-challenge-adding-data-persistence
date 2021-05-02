// build your `Resource` model here
const db = require("../../data/dbConfig.js")

function findAll() {
    return db('resources as rs')
}

module.exports = {
    findAll,
}