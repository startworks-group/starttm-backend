/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

const status = require('../data/table/status');

class TableSchema extends Schema {
  up() {
    this.create('tables', (table) => {
      table.increments();
      table.enu('status', status).notNullable();
      table
        .integer('number')
        .notNullable()
        .unsigned();
      table
        .integer('event_id')
        .notNullable()
        .unsigned()
        .references('events.id')
        .onUpdate('cascade')
        .onDelete('cascade');
      table.timestamps();
      table.unique(['event_id', 'number']);
    });
  }

  down() {
    this.drop('tables');
  }
}

module.exports = TableSchema;
