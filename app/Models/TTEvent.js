/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class TTEvent extends Model {
  static boot() {
    super.boot();
  }

  static get table () {
    return 'ttevents'
  }

  static columns() {
    return ['name', 'type', 'start', 'end'];
  }

  owner() {
    return this.belongsTo('App/Models/User', 'owner_id', 'id');
  }

  address() {
    return this.belongsTo('App/Models/Address');
  }

  entries() {
    return this.hasMany('App/Models/TTEvent/Entry');
  }

  tables() {
    return this.hasMany('App/Models/TTEvent/Table');
  }

  championships() {
    return this.hasMany('App/Models/TTEvent/Championship');
  }
}

module.exports = TTEvent;
