/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Address extends Model {
  person() {
    return this.belongsTo('App/Models/Person');
  }
}

module.exports = Address;
