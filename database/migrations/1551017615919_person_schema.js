'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PersonSchema extends Schema {
  up() {
    this.create('people', (table) => {
      table.increments();
      table
        .integer('user_id')
        .unsigned()
        .references('users.id')
        .notNullable()
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('name').notNullable();
      table.enu('sex', ['MALE', 'FEMALE']).notNullable();
      table.date('birth').notNullable();
      table
        .string('cpf', 11)
        .notNullable()
        .unique();
      table
        .string('rg')
        .notNullable()
        .unique();
      table
        .integer('address_id')
        .notNullable()
        .unsigned()
        .references('addresses.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.timestamps();
    });
  }

  down() {
    this.drop('people');
  }
}

module.exports = PersonSchema;
