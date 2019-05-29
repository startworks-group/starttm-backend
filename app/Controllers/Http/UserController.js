const { User, Subscription } = use('App/Models');
const Hash = use('Hash');

class UserController {
  async index() {
    const users = await User.all();

    return users;
  }

  async show({ params }) {
    const user = await User.find(params.id);

    await user.loadMany(['person', 'athlete']);

    return user;
  }

  async store({ request }) {
    const token = request.input('subscriptionToken');

    const subscription = await Subscription.findByOrFail('token', token);

    const { email, username, password } = subscription;

    const hashPass = await Hash.make(password);

    const user = await User.create({ email, username, password: hashPass });

    subscription.delete();

    return user;
  }
}

module.exports = UserController;
