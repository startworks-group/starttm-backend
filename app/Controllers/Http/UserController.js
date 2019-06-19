const { User, Subscription } = use('App/Models');
const Hash = use('Hash');

class UserController {
  async index() {
    const users = await User.all();

    return users;
  }

  async show({ params }) {
    const user = await User.find(params.id);

    await user.loadMany(['person', 'athlete', 'roles', 'permissions']);

    return user;
  }

  async store({ request }) {
    const token = request.input('subscriptionToken');

    const subscription = await Subscription.findByOrFail('token', token);

    const { permissions, roles, token, ...data } = subscription;
    const hashPass = await Hash.make(data.password);

    const user = await User.create({ data, password: hashPass });
    if (roles) await user.roles().attach(roles);
    if (permissions) await user.permissions().attach(permissions);

    subscription.delete();

    return user;
  }
}

module.exports = UserController;
