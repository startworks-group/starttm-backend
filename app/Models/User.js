/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

const { base } = use('App/Utils/ModelsPath');

class User extends Model {
  static boot() {
    super.boot();
  }

  tokens() {
    return this.hasMany(`${base}/Token`);
  }

  person() {
    return this.hasOne(`${base}/Person`);
  }

  athlete() {
    return this.hasOne(`${base}/Athlete`);
  }

  static get traits() {
    return ['@provider:Adonis/Acl/HasRole', '@provider:Adonis/Acl/HasPermission'];
  }
}

module.exports = User;
