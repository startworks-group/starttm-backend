'use strict'

/*
|--------------------------------------------------------------------------
| SubscritionSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
const Hash = use('Hash')

class SubscriptionSeeder {
  async run () {
    
    const encriptedPassword = await Hash.make('123123');

    await Database.table('users').insert([
      {
        username: 'usuario1',
        email: 'example@example.com',
        password: encriptedPassword,
      },
      {
        username: 'usuario2',
        email: 'example@example.com',
        password: encriptedPassword,
      },
      {
        username: 'usuario3',
        email: 'example@example.com',
        password: encriptedPassword,
      },
      {
        username: 'usuario4',
        email: 'example@example.com',
        password: encriptedPassword,
      },
      {
        username: 'usuario5',
        email: 'example@example.com',
        password: encriptedPassword,
      },
      {
        username: 'usuario6',
        email: 'example@example.com',
        password: encriptedPassword,
      },
    ]);
  }
}

module.exports = SubscriptionSeeder
