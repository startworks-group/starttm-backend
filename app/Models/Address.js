/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Address extends Model {
  person() {
    return this.belongsToMany('App/Models/Person').pivotTable('person_address');
  }
}

module.exports = Address;
