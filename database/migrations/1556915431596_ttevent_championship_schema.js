/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ChampionshipSchema extends Schema {
  up() {
    this.create('championships', (table) => {
      table.increments();
      table
        .integer('tt_event_id')
        .notNullable()
        .unsigned()
        .references('ttevents.id');
      table.enu('sex', ['M', 'F']).notNullable();
      table.enu('type', ['RAT', 'RAK']).notNullable();
      table
        .integer('upperLimit')
        .notNullable()
        .unsigned();
      table
        .integer('downLimit')
        .notNullable()
        .unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop('championships');
  }
}

module.exports = ChampionshipSchema;
