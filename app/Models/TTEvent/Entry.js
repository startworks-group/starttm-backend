/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Entry extends Model {
  static boot() {
    super.boot();
  }

  ttevent() {
    return this.belongsTo('App/Models/TTEvent');
  }
}

module.exports = Entry;
