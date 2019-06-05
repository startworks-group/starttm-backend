/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class User extends Model {
  static boot() {
    super.boot();
  }

  tokens() {
    return this.hasMany('App/Models/Token');
  }

  person() {
    return this.hasOne('App/Models/Person');
  }

  athlete() {
    return this.hasOne('App/Models/Athlete');
  }

  static get traits() {
    return ['@provider:Adonis/Acl/HasRole', '@provider:Adonis/Acl/HasPermission'];
  }
}

module.exports = User;
