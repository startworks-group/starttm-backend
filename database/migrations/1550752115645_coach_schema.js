'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CoachSchema extends Schema {
  up() {
    this.create('coaches', (table) => {
      table.increments();
      table
          .integer('user_id')
          .unsigned()
          .unique()
          .notNullable()
          .references('users.id');
      table
          .integer('club_id')
          .unsigned()
          .notNullable()
          .references('clubs.id');
      table.timestamps();

      table.unique(['user_id', 'club_id']);
    });
  }

  down() {
    this.drop('coaches');
  }
}

module.exports = CoachSchema;
