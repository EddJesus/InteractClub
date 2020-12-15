
exports.up = function(knex) {
  return knex.schema.createTable('interactians', function(table) {
      table.increments('id_interactians').primary();
      
      table.string('name', 255).notNullable();
      table.string('email', 255).notNullable();
      table.string('tel', 11).notNullable();
      table.string('role', 50).notNullable();
      table.string('password', 255).notNullable();
      table.integer('permission', 10).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('interactians');
};
