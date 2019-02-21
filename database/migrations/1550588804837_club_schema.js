'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ClubSchema extends Schema {
  up() {
    this.create('clubs', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('clubs');
  }
}

module.exports = ClubSchema;
