/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Confront extends Model {
  static boot() {
    super.boot();
  }

  static columns() {
    return ['number', 'playerOne', 'playerTwo', 'arbiter', 'phase', 'table_id'];
  }

  playerOne() {
    return this.belongsTo('App/Models/Athlete', 'playerOne', 'id');
  }

  playerTwo() {
    return this.belongsTo('App/Models/Athlete', 'playerTwo', 'id');
  }

  sets() {
    return this.hasMany('App/Models/Event/Championship/Set');
  }

  table() {
    return this.belongsTo('App/Models/Event/Table');
  }
}

module.exports = Confront;
