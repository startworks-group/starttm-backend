/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Championship extends Model {
  static boot() {
    super.boot();
  }

  static columns() {
    return ['sex', 'type', 'upperLimit', 'downLimit'];
  }

  athleteInscriptions() {
    return this.hasMany('App/Models/Event/AthleteInscription');
  }

  groups(){
    return this.hasMany('App/Models/Events/Championship/Group');
  }
}

module.exports = Championship;
