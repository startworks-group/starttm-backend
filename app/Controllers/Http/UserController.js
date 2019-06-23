const { User, Subscription } = use('App/Models');
const Hash = use('Hash');

class UserController {
  async index({ request }) {
    return User
            .query()
            .paginate(
              request.input('page', 1),
              request.input('perPage', 10)
            );
  }

  async show({ params }) {
    const user = await User.findOrFail(params.id);

    await user.loadMany(['person', 'athlete', 'roles', 'permissions']);

    return user;
  }

  async store({ request }) {
    const subscriptionToken = request.input('subscriptionToken');

    const subscription = await Subscription.findByOrFail('token', subscriptionToken);
    const { permissions, roles, token, password, username, email } = subscription;
    const hashPass = await Hash.make(password);
    const user = await User.create({ username, email, password: hashPass });
    
    if (roles) await user.roles().attach(roles);
    if (permissions) await user.permissions().attach(permissions);

    subscription.delete();

    return user;
  }
}

module.exports = UserController;
