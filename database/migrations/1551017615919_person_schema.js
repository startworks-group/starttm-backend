'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonSchema extends Schema {
  up () {
    this.create('persons', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
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
          .references('id')	
          .inTable('addresses');
      table.timestamps()
    })
  }

  down () {
    this.drop('persons')
  }
}

module.exports = PersonSchema
