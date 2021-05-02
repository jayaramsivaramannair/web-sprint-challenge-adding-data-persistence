// build your `Resource` model here
const db = require("../../data/dbConfig.js")

function findAll() {
    return db('resources as rs')
}

function findById(id) {
    return db('resources as rs')
        .where("resource_id", id)
        .first()
}

async function add(project_id, resource) {
    const [id] = await db('resources as rs').insert(resource)
    const newResource = await findById(id)
    await db('project_resources as prs').insert({ project_id: project_id, resource_id: id })
    return newResource
}

module.exports = {
    findAll,
    add,
}