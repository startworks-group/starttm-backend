/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Federation extends Model {
  static boot() {
    super.boot();
  }

  static columns() {
    return ['name', 'initials', 'uf', 'user_manager_id'];
  }

  userManager() {
    return this.belongsTo('App/Models/User', 'user_manager_id', 'id');
  }
}

module.exports = Federation;
