
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('user_id')
    table.string('username').notNullable()
    table.string('password').notNullable()
    table.string('picUrl').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
