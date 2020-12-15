exports.up = function(knex) {
    return knex.schema.createTable('projects', function(table) {
        table.increments('id_project');
        table.string('title', 50).notNullable();
        table.text('body').notNullable();
        table.string('img', 255).notNullable();

        table.integer('id_interactian').unsigned().notNullable();

        table.foreign('id_interactian', 'id_interactian_project').references('id_interactians').inTable('interactians');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('projects');
  };
  