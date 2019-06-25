/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

const { base, championship } = use('App/Utils/ModelsPath');

class Athlete extends Model {
  static boot() {
    super.boot();
  }

  static columns() {
    return ['rating', 'federation_id', 'user_id'];
  }

  championshipInscriptions() {
    return this.hasMany(`${championship}/AthleteInscription`);
  }

  user() {
    return this.belongsTo(`${base}/User`);
  }

  federation() {
    return this.belongsTo(`${base}/Federation`);
  }
}

module.exports = Athlete;
