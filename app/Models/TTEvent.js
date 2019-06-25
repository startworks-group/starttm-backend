/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

const { base, ttevent, championship } = use('App/Utils/ModelsPath');

class TTEvent extends Model {
  static boot() {
    super.boot();
  }

  static get table() {
    return 'ttevents';
  }

  static columns() {
    return ['name', 'type', 'start', 'end'];
  }

  owner() {
    return this.belongsTo(`${base}/User`, 'owner_id', 'id');
  }

  address() {
    return this.belongsTo(`${base}/Address`);
  }

  entries() {
    return this.hasMany(`${ttevent}/Entry`);
  }

  tables() {
    return this.hasMany(`${ttevent}/Table`);
  }

  championships() {
    return this.hasMany(`${championship}`);
  }
}

module.exports = TTEvent;
