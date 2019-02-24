'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments();
      table
          .string('username', 80)
          .notNullable()
          .unique();
      table
          .string('email', 254)
          .notNullable()
          .unique();
      table.string('password', 60).notNullable();
      table.string('name');
      table.enu('sex', ['MALE', 'FEMALE']);
      table.date('birth');
      table.string('cpf', 11).unique();
      table.string('rg').unique();
      table
          .integer('address_id')
          .unsigned()
          .references('id')
          .inTable('addresses');
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UserSchema;
