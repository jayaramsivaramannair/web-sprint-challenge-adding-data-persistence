exports.seed = async function (knex) {
  await knex('resources').insert([
    { resource_name: 'Samwise Gamgee', resource_description: 'A friend to prop you up in tough times' },
    { resource_name: 'Frodo Baggins', resource_description: "One Ring cannot be destroyed without this hobbit's help" },
    { resource_name: 'Pen', resource_description: 'A pen to underline key passages' },
    { resource_name: 'Laptop', resource_description: "A laptop to write and summarize the novel's plot" },
  ])

};
