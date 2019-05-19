/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
const { championship } = use('App/Utils/ModelsPath');

class Championship extends Model {
  static boot() {
    super.boot();
  }

  static columns() {
    return ['sex', 'type', 'upperLimit', 'downLimit'];
  }

  athleteInscriptions() {
    return this.hasMany(`${championship}/AthleteInscription`);
  }

  confronts() {
    return this.hasMany(`${championship}/Confront`);
  }

  groups() {
    return this.hasMany(`${championship}/Group`);
  }
}

module.exports = Championship;
