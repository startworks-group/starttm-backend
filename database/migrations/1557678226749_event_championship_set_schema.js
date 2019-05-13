/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class SetSchema extends Schema {
  up() {
    this.create('sets', (table) => {
      table.increments();
      table
        .integer('order')
        .notNullable()
        .unsigned();
      table
        .integer('playerOneScore')
        .notNullable()
        .unsigned();
      table
        .integer('playerTwoScore')
        .notNullable()
        .unsigned();
      table
        .integer('confront_id')
        .notNullable()
        .unsigned()
        .references('confronts.id')
        .onUpdate('cascade')
        .onDelete('cascade');
      table.timestamps();
      // table.unique(['order']);
    });
  }

  down() {
    this.drop('sets');
  }
}

module.exports = SetSchema;
