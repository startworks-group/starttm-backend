'use strict';

const User = use('App/Models/User');
const Subscription = use('App/Models/Auth/Subscription');

class UserController {
  async store({request, reponse}) {
    const data = request.only(['email', 'username']);
    const token = request.input('token');

    const subscription = await Subscription.findByOrFail({...data, token});

    const {email, username, password} = subscription;
    const user = await User.create({email, username, password});

    subscription.delete();

    return user;
  }
}

module.exports = UserController;
