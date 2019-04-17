'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ArbiterSchema extends Schema {
  up() {
    this.create('arbiters', (table) => {
      table.increments();
      table
        .integer('user_id')
        .unsigned()
        .unique()
        .notNullable()
        .references('id')
        .inTable('users');
      table
        .integer('participations')
        .unsigned()
        .notNullable();
      table
        .integer('address_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('addresses');
      table.timestamps();
    });
  }

  down() {
    this.drop('arbiters');
  }
}

module.exports = ArbiterSchema;
