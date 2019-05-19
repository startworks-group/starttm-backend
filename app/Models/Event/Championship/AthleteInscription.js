'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
<<<<<<< HEAD:app/Models/Event/AthleteInscription.js
const { base, event, championship } = use('App/Utils/ModelsPath');
=======
const { base, event } = use('App/Utils/ModelsPath');
>>>>>>> ffa861bd847a982b274b8b4a3dcea51eb6d3922c:app/Models/Event/Championship/AthleteInscription.js

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
    return this.belongsTo(`${event}/Championship`);
  }

  group() {
    return this.belongsTo(`${championship}/Group`);
  }
}

module.exports = AthleteInscription;
