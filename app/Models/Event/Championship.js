

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
<<<<<<< HEAD
    return this.hasMany(`${championship}/AthleteInscription`);
  }

  confronts() {
    return this.hasMany(`${championship}/Confront`);
  }

  groups() {
    return this.hasMany(`${championship}/Group`);
=======
    return this.hasMany('App/Models/Event/Championship/AthleteInscription');
  }

  confronts() {
    return this.hasMany('App/Models/Event/Championship/Confront');
>>>>>>> ffa861bd847a982b274b8b4a3dcea51eb6d3922c
  }
}

module.exports = Championship;
