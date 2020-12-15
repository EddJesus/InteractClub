exports.up = function(knex) {
    return knex.schema.createTable('news', function(table) {
        table.increments('id_new');
        table.string('title', 255).notNullable();
        table.text('body').notNullable();
        table.string('img', 255).notNullable();
        
        table.integer('id_interactian').unsigned().notNullable();

        table.foreign('id_interactian', 'id_interactian_new').references('id_interactians').inTable('interactians');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('news');
  };
  