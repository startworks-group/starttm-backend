const Antl = use('Antl');

class AuthSubscriptionStore {
  get rules () {
    return {
      username: 'required',
      email: 'required|email',
      password: 'required',
      redirectUrl: 'required',
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
