exports.seed = async function (knex) {
  await knex('tasks').insert([
    { task_description: 'Create a fellowship', task_notes: 'Create a fellowship to help Frodo destroy the Ring', project_id: 1 },
    { task_description: 'Read 50 Pages a day', task_notes: 'Read 50 Pages a Day so that Novel can be finished by weekend', project_id: 2 },
  ])
};
