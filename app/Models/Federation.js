/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Federation extends Model {
  static boot() {
    super.boot();
  }

  static columns() {
    return ['name', 'initials', 'uf'];
  }
}

module.exports = Federation;
