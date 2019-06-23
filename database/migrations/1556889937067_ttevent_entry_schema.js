/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');
const entryTypes = require('../data/ttevent/entries');

class EntrySchema extends Schema {
  up() {
    this.create('entries', (table) => {
      table.increments();
      table
        .integer('tt_event_id')
        .notNullable()
        .unsigned()
        .references('ttevents.id');
      table.enu('type', entryTypes).notNullable();
      table
        .double('price')
        .notNullable()
        .unsigned();
      table.timestamps();
      table.unique(['type', 'tt_event_id']);
    });
  }

  down() {
    this.drop('entries');
  }
}

module.exports = EntrySchema;
