exports.up = async function (knex) {
    await knex.schema.createTable('projects', (table) => {
        table.increments('project_id')
        table.text('project_name').notNull()
        table.text('project_description')
        table.boolean('project_completed').defaultTo(false)
    })

    await knex.schema.createTable('resources', (table) => {
        table.increments('resource_id')
        table.text('resource_name').notNull().unique()
        table.text('resource_description')
    })

    await knex.schema.createTable('tasks', (table) => {
        table.increments('task_id')
        table.text('task_description').notNull()
        table.text('task_notes')
        table.boolean('task_completed').defaultTo(false)
        table.integer('project_id').unsigned().references('project_id').inTable('projects').onUpdate('CASCADE').onDelete('CASCADE')
    })

    await knex.schema.createTable('project_resources', (table) => {
        table.integer('project_id').unsigned().references('project_id').inTable('projects').onUpdate('CASCADE').onDelete('CASCADE')
        table.integer('resource_id').unsigned().references('resource_id').inTable('resources').onUpdate('CASCADE').onDelete('CASCADE')
        table.primary(['project_id', 'resource_id'])
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('project_resources')
    await knex.schema.dropTableIfExists('tasks')
    await knex.schema.dropTableIfExists('resources')
    await knex.schema.dropTableIfExists('projects')
};
