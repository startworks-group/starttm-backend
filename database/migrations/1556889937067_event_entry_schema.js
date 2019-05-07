/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');
const entryTypes = require('../data/event/entries');

class EntrySchema extends Schema {
  up() {
    this.create('entries', (table) => {
      table.increments();
      table
        .integer('event_id')
        .notNullable()
        .unsigned()
        .references('event_id');
      table.enu('type', entryTypes).notNullable();
      table
        .double('price')
        .notNullable()
        .unsigned();
      table.timestamps();
      table.unique(['type', 'event_id']);
    });
  }

  down() {
    this.drop('entries');
  }
}

module.exports = EntrySchema;
