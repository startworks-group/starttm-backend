/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddressClubSchema extends Schema {
  up() {
    this.create('address_club', (table) => {
      table.increments();
      table
        .integer('club_id')
        .notNullable()
        .unsigned()
        .unique()
        .references('clubs.id');
      table
        .integer('address_id')
        .notNullable()
        .unsigned()
        .unique()
        .references('addresses.id');
      table.timestamps();
    });
  }

  down() {
    this.drop('address_club');
  }
}

module.exports = AddressClubSchema;
