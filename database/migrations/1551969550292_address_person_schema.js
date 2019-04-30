/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddressPersonSchema extends Schema {
  up() {
    this.create('address_person', (table) => {
      table.increments();
      table
        .integer('address_id')
        .notNullable()
        .unsigned()
        .unique()
        .references('addresses.id')
        .onUpdate('cascade')
        .onDelete('cascade');
      table
        .integer('person_id')
        .notNullable()
        .unsigned()
        .unique()
        .references('people.id')
        .onUpdate('cascade')
        .onDelete('cascade');
      table.unique(['address_id', 'person_id']);
      table.timestamps();
    });
  }

  down() {
    this.drop('address_person');
  }
}

module.exports = AddressPersonSchema;
