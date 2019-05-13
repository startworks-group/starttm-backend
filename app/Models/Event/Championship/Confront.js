/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Confront extends Model {
  static boot() {
    super.boot();
  }

  static columns() {
    return ['number', 'playerOne', 'playerTwo', 'arbiter', 'phase'];
  }

  playerOne() {
    return this.belongsTo('App/Models/Athlete', 'playerOne', 'id');
  }

  playerTwo() {
    return this.belongsTo('App/Models/Athlete', 'playerTwo', 'id');
  }

  championship() {
    return this.belongsTo('App/Models/Championship');
  }
}

module.exports = Confront;
