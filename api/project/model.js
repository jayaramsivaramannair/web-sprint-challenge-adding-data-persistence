// build your `Project` model here
const db = require("../../data/dbConfig.js")

function findAll() {
    return db('projects as p')
}

async function findById(id) {
    return db('projects as p')
        .where('project_id', id)
        .first()
}

async function add(project) {
    const [id] = await db('projects as p').insert(project)
    return findById(id)
}

module.exports = {
    findAll,
    findById,
    add,
}
