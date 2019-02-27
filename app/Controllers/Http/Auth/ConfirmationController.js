const Subscription = use('App/Models/Auth/Subscription');
const { ResourceNotFoundException } = use('App/Exceptions');

const { User } = use('App/Models');

class ConfirmationController {
  async show({ response, params }) {
    const subscription = await Subscription.findOne({ token: params.token });

    if (!subscription) throw new ResourceNotFoundException('Cannot did find a subscription by given data', 400);

    const { email, username, password } = subscription;

    await User.create({ email, username, password });

    await Subscription.deleteOne({ token: params.token });

    response.status(201).send({ message: 'That user has been registred.' });
  }
}

module.exports = ConfirmationController;