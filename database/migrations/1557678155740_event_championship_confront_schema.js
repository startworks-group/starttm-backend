/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ConfrontSchema extends Schema {
  up() {
    this.create('confronts', (table) => {
      table.increments();
      table
        .integer('number')
        .notNullable()
        .unsigned();
      table
        .integer('playerOne')
        .notNullable()
        .unsigned();
      table
        .integer('playerTwo')
        .notNullable()
        .unsigned();
      table.string('arbiter').notNullable();
      table.string('phase').defaultTo('classificatory');
      table
        .integer('table_id')
        .notNullable()
        .unsigned()
        .references('tables.id')
        .onUpdate('cascade')
        .onDelete('cascade');
      table
        .integer('championship_id')
        .notNullable()
        .unsigned()
        .references('championships.id')
        .onUpdate('cascade')
        .onDelete('cascade');
      table.timestamps();
    });
  }

  down() {
    this.drop('confronts');
  }
}

module.exports = ConfrontSchema;
