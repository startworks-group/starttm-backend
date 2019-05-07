/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AthleteInscriptionSchema extends Schema {
  up() {
    this.create('athlete_inscriptions', (table) => {
      table.increments();
      table
        .integer('athlete_id')
        .notNullable()
        .unsigned()
        .references('athletes.id');
      table
        .integer('championship_id')
        .notNullable()
        .unsigned()
        .references('championships.id');
      table.boolean('approved').defaultTo(false);
      table.timestamps();
    });
  }

  down() {
    this.drop('athlete_inscriptions');
  }
}

module.exports = AthleteInscriptionSchema;
