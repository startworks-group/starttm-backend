'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

const phaseTypes = require('../data/confront/phase');

class ConfrontSchema extends Schema {
  up() {
    this.create('confronts', (table) => {
      table.increments();
      table
        .integer('number')
        .notNullable()
        .unsigned();
      table
        .integer('player_one')
        .notNullable()
        .unsigned()
        .references('athletes.id')
        .onUpdate('cascade');
      table
        .integer('player_two')
        .notNullable()
        .unsigned()
        .references('athletes.id')
        .onUpdate('cascade');
      table.string('arbiter').notNullable();
      table.enu('phase', phaseTypes).defaultTo(phaseTypes[0]);
      table
        .integer('table_id')
        .notNullable()
        .unsigned()
        .references('tables.id')
        .onUpdate('cascade')
        .onDelete('cascade');
      table
        .integer('championship_id')
        .notNullable()
        .unsigned()
        .references('championships.id')
        .onUpdate('cascade')
        .onDelete('cascade');
      table.timestamps();
    });
  }

  down() {
    this.drop('confronts');
  }
}

module.exports = ConfrontSchema;
