/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ClubSchema extends Schema {
  async up() {
    const federationsExists = await this.hasTable('federations');
    const addressesExists = await this.hasTable('addresses');
    if (federationsExists && addressesExists){
      this.create('clubs', (table) => {
        table.increments();
        table.string('name').notNullable();
        table
          .integer('federation_id')
          .notNullable()
          .unique()
          .unsigned()
          .references('federations.id');
        table
          .integer('address_id')
          .notNullable()
          .unique()
          .unsigned()
          .references('addresses.id');
        table.timestamps();
      });
    }
    /* this.create('clubs', (table) => {
      table.increments();
      table.string('name').notNullable();
      table
        .integer('federation_id')
        .notNullable()
        .unique()
        .unsigned()
        .references('federations.id');
      table
        .integer('address_id')
        .notNullable()
        .unique()
        .unsigned()
        .references('addresses.id');
      table.timestamps();
    }); */
  }

  down() {
    this.drop('clubs');
  }
}

module.exports = ClubSchema;
