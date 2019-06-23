'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
const { base, ttevent } = use('App/Utils/ModelsPath');

class AthleteInscription extends Model {
  static boot() {
    super.boot();
  }

  static columns() {
    return ['athlete_id'];
  }

  athlete() {
    return this.belongsTo(`${base}/Athlete`);
  }

  championship() {
    return this.belongsTo(`${ttevent}/Championship`);
  }
}

module.exports = AthleteInscription;
