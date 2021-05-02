exports.seed = async function (knex) {
  await knex('projects').insert([
    { project_name: 'Destroy the One Ring', project_description: 'Go to Mount Doom and Destroy the One Ring' },
    { project_name: 'Finish SilverLock Novel', project_description: 'Finish SilverLock Novel by John Myers Myers' },
  ])

};
