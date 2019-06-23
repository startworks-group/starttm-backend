'use scrict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Table extends Model {
  static boot() {
    super.boot();
  }

  static columns() {
    return ['status', 'number'];
  }

  confronts() {
    return this.hasMany('App/Models/TTEvent/Championship/Confront');
  }
}

module.exports = Table;
