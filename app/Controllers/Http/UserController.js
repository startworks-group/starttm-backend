const { User, Subscription } = use('App/Models');

class UserController {
  async index() {
    const users = await User.all();

    return users;
  }

  async show({ params }) {
    const user = await User.find(params.id);

    return user;
  }

  async store({ request }) {
    const token = request.input('subscriptionToken');

    const subscription = await Subscription.findByOrFail('token', token);

    const { email, username, password } = subscription;
    const user = await User.create({ email, username, password });

    subscription.delete();

    return user;
  }
}

module.exports = UserController;
