const Antl = use('Antl');

class AuthSubscriptionStore {
  get rules () {
    return {
      username: 'required|unique:subscriptions',
      email: 'required|email|unique:subscriptions',
      password: 'required',
      redirect_url: 'required',
    }
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = AuthSubscriptionStore;
