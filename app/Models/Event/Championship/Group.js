'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
const { event, championship } = use('App/Utils/ModelsPath');

class Group extends Model {
  championship() {
    return this.belongsTo(`${event}/Championship`);
  }

  athletesInscriptions() {
    return this.hasMany(`${championship}/AthleteInscription`);
  }
}

module.exports = Group;
