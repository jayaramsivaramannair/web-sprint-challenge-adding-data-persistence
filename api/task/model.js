// build your `Task` model here
const db = require("../../data/dbConfig.js")

function findAll() {
    return db('tasks as tks')
        .leftJoin('projects as p', 'p.project_id', 'tks.project_id')
        .select('tks.task_id', 'tks.task_description', 'tks.task_notes', 'tks.task_completed', 'p.project_name', 'p.project_description')
}

module.exports = {
    findAll,
}
