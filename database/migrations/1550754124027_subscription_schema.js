'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class SubscriptionSchema extends Schema {
  up() {
    this.create('subscriptions', (table) => {
      table.increments();
      table
          .string('username', 80)
          .notNullable()
          .unique();
      table
          .string('email', 254)
          .notNullable()
      table.string('password', 60).notNullable();
      table
          .string('token', 16)
          .notNullable()
          .unique();
      table.timestamps();
    });
  }
  down() {
    this.drop('subscriptions');
  }
}

module.exports = SubscriptionSchema;
