/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ChampionshipSchema extends Schema {
  up() {
    this.create('championships', (table) => {
      table.increments();
      table
        .integer('event_id')
        .notNullable()
        .unsigned()
        .references('events.id');
      table.string('name').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('championships');
  }
}

module.exports = ChampionshipSchema;
