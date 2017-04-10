
exports.up = function(knex, Promise) {
  return knex.schema.createTable('likes', (table) => {
    table.increments('user_id')
    table.integer('liker_id').notNullable()
    table.integer('liked_id').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('likes')
};
