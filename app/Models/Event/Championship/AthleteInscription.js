'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
<<<<<<< HEAD:app/Models/Event/Championship/AthleteInscription.js
const { base, event, championship } = use('App/Utils/ModelsPath');
=======
const { base, event } = use('App/Utils/ModelsPath');
>>>>>>> 6263b1afc0a5a7b01c441bbc16f2f41ccee8188c:app/Models/Event/AthleteInscription.js

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
