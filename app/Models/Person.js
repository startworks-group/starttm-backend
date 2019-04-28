/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Person extends Model {
  user() {
    return this.belongsTo('App/Models/User');
  }

  address() {
    return this.belongsToMany('App/Models/Address');
  }
}

module.exports = Person;
