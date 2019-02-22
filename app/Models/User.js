'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class User extends Model {
  static boot() {
    super.boot();
  }

  tokens() {
    return this.hasMany('App/Models/Token');
  }
}

module.exports = User;
