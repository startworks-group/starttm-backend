/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Athlete extends Model {
  static boot() {
    super.boot();
  }

  static columns() {
    return ['rating', 'federation_id', 'user_id'];
  }

  championshipInscriptions() {
    return this.hasMany('App/Models/Event/Championship/AthleteInscription');
  }

  user() {
    return this.belongsTo('App/Models/User');
  }

  federation() {
    return this.belongsTo('App/Models/Federation');
  }
}

module.exports = Athlete;
