'use strict'

class Subscription {
  get rules () {
    return {
      username: 'required',
      email: 'required|email',
      password: 'required',
      redirectUrl: 'required'
    }
  }

  get messages () {
	return {
	  'username.required': 'You must provide a username.',
	  'email.required': 'You must provide a email address.',
	  'email.email': 'You must provide a valid email address.',
	  'password.required': 'You must provide a password',
	  'redirectUrl.required': 'You must provide a redirectUrl'
	}
  }
}

module.exports = Subscription
