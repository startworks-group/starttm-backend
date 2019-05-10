/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class AthleteInscription extends Model {
  static boot() {
    super.boot();
  }

  static columns() {
    return ['athlete_id'];
  }

  athlete() {
    return this.belongsTo('App/Models/Athlete');
  }

  championship() {
    return this.belongsTo('App/Models/Event/Championship');
  }
}

module.exports = AthleteInscription;
