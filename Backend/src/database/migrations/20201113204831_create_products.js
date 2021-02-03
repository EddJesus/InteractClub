exports.up = function(knex) {
    return knex.schema.createTable('products', function(table) {
        table.increments('id_product');
        table.string('title', 255).notNullable();
        table.text('description').notNullable();
        table.string('img', 255).notNullable();
        table.decimal('price', 65,0).notNullable();
        table.string('url', 255).notNullable().defaultTo('');
        
        table.integer('id_interactian').unsigned().notNullable();

        table.foreign('id_interactian', 'id_interactian_product').references('id_interactians').inTable('interactians');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('products');
  };
  