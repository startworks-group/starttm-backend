/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddressSchema extends Schema {
  up() {
    this.create('addresses', (table) => {
      table.increments();
      table.string('street').notNullable();
      table
        .integer('number')
        .notNullable()
        .unsigned();
      table.string('neighborhood').notNullable();
      table.string('cep').notNullable();
      table.string('complement').notNullable();
      table.string('city').notNullable();
      table.string('state').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('addresses');
  }
}

module.exports = AddressSchema;
