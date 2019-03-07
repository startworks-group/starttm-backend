'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddressPersonSchema extends Schema {
  up() {
    this.create('address_people', (table) => {
      table.increments();
      table
          .integer('address_id')
          .notNullable()
          .unsigned()
          .unique()
          .references('id')
          .inTable('addresses');
      table
          .integer('person_id')
          .notNullable()
          .unsigned()
          .unique()
          .references('id')
          .inTable('people');
      table.timestamps();
    });
  }

  down() {
    this.drop('address_people');
  }
}

module.exports = AddressPersonSchema;
