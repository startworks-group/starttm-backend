'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AthleteSchema extends Schema {
  up() {
    this.create('athletes', (table) => {
      table.increments();
      table
          .integer('user_id')
          .unsigned()
          .notNullable()
          .unique()
          .references('id')
          .inTable('users');
      table
          .integer('rating')
          .unsigned()
          .notNullable();
      table
          .integer('federation_id')
          .unsigned()
          .notNullable()
          .references('federations')
          .inTable('Federation');
      table.timestamps();
    });
  }

  down() {
    this.drop('athletes');
  }
}

module.exports = AthleteSchema;
