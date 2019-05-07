/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Championship extends Model {
  static boot() {
    super.boot();
  }

  athleteInscriptions() {
    this.hasMany('App/Models/Event/AthleteInscription');
  }
}

module.exports = Championship;
