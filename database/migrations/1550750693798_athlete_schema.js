/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AthleteSchema extends Schema {
  up() {
    this.create('athletes', (table) => {
      table.increments();
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .unique()
        .references('users.id');
      table
        .integer('rating')
        .unsigned()
        .notNullable();
      table
        .integer('federation_id')
        .unsigned()
        .notNullable()
        .references('federations.id');
      table.timestamps();
    });
  }

  down() {
    this.drop('athletes');
  }
}

module.exports = AthleteSchema;
