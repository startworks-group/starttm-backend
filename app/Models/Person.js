/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Person extends Model {
  static boot() {
    super.boot();
  }

  static columns() {
    return ['name', 'sex', 'birth', 'cpf', 'rg', 'user_id'];
  }

  static columnsUpdate() {
    return ['name', 'sex', 'birth'];
  }

  user() {
    return this.belongsTo('App/Models/User');
  }

  address() {
    return this.belongsTo('App/Models/Address');
  }
}

module.exports = Person;
