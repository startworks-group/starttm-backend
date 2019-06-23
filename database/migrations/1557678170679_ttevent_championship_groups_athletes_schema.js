'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GroupsAthletesSchema extends Schema {
  up () {
    this.create('groups_athletes', (table) => {
      table.increments();
      table
        .integer('athlete_id')
        .notNullable()
        .unsigned()
        .references('athletes.id');
      table
        .integer('group_id')
        .notNullable()
        .unsigned()
        .references('groups.id');
      table.timestamps()
    })
  }

  down () {
    this.drop('groups_athletes')
  }
}

module.exports = GroupsAthletesSchema
