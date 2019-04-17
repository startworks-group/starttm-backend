'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ClubSchema extends Schema {
  up() {
    this.create('clubs', (table) => {
      table.increments();
      table.string('name').notNullable();
      table
        .integer('manager_id')
        .notNullable()
        .unique()
        .unsigned()
        .references('users.id');
      table
        .integer('eventManager_id')
        .notNullable()
        .unique()
        .unsigned()
        .references('users.id');
      table
        .integer('federation_id')
        .notNullable()
        .unique()
        .unsigned()
        .references('federations.id');
      table.timestamps();
    });
  }

  down() {
    this.drop('clubs');
  }
}

module.exports = ClubSchema;
