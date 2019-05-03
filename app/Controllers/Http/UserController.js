const { User, Subscription } = use('App/Models');

class UserController {
  async store({ request }) {
    const token = request.input('subscriptionToken');

    const subscription = await Subscription.findByOrFail('token', token);

    const { email, username, password } = subscription;
    const user = await User.create({ email, username, password });

    subscription.delete();

    return user;
  }

  async index({ params }) {
    const users = await User.findByOrFail();

    return users;
  }

  async show({ params }) {
    const user = await User.find(params.id);

    return user;
  }
}

module.exports = UserController;
