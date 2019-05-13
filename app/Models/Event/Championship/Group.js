'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Group extends Model {

    championship() {
        return this.belongsTo('App/Models/Event/Championship');
    }

    athletes(){
        return this
            .belongsToMany('App/Models/Athlete')
            .pivotTable('groups_athletes');
    }
}

module.exports = Group
