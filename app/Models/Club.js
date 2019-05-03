/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Club extends Model {
  static boot() {
    super.boot();
  }

  static columns() {
    return ['name', 'federation_id'];
  }

  federation() {
    return this.belongsTo('App/Models/Federation');
  }

  address() {
    return this.belongsTo('App/Models/Address');
  }
}

module.exports = Club;
