/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Event extends Model {
  static boot() {
    super.boot();
  }

  static columns() {
    return ['name', 'type', 'start', 'end'];
  }

  owner() {
    return this.belongsTo('App/Models/User');
  }

  address() {
    return this.belongsTo('App/Models/Address');
  }

  entries() {
    return this.hasMany('App/Models/Event/Entry');
  }

  championships() {
    return this.hasMany('App/Models/Event/Championship');
  }
}

module.exports = Event;
