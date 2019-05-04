/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class EventSchema extends Schema {
  up() {
    this.create('events', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.datetime('start').notNullable();
      table.datetime('end').notNullable();
      table
        .integer('address_id')
        .notNullable()
        .unique()
        .unsigned()
        .references('addresses.id');
      table.timestamps();
    });
  }

  down() {
    this.drop('events');
  }
}

module.exports = EventSchema;
