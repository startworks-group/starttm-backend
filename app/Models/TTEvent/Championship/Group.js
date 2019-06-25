'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
const { championship } = use('App/Utils/ModelsPath');

class Group extends Model {
  championship() {
    return this.belongsTo(`${championship}`);
  }

  athletesInscriptions() {
    return this.hasMany(`${championship}/AthleteInscription`);
  }

  athletes() {
    return this
      .belongsToMany('App/Models/Athlete')
      .pivotTable('groups_athletes');
  }
}

module.exports = Group;
