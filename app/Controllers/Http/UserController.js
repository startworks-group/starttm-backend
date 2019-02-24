'use strict';

const User = use('App/Models/User');
const Subscription = use('App/Models/Auth/Subscription');

class UserController {
  async store({request}) {
    const token = request.input('subscriptionToken');

    const subscription = await Subscription.findByOrFail({token});

    const {email, username, password} = subscription;
    const user = await User.create({email, username, password});

    subscription.delete();

    return user;
  }
}

module.exports = UserController;
