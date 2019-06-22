const BaseExceptionHandler = use('BaseExceptionHandler');

const Env = use('Env');
const Youch = require('youch');

class ExceptionHandler extends BaseExceptionHandler {
  async handle (error, { response, request }) {
    if ( error.name === 'ValidationException' ) {
	  return response.status(422).json({ validation: error.messages })
	}
	
	if (Env.get('NODE_ENV') === 'development') {
      const youch = new Youch(error, request);
      const errorJSON = await youch.toJSON();

      return response.status(error.status).send(errorJSON);
    }

    return super.handle(...arguments)
  }
  
  async report(error, { request }) {}
}

module.exports = ExceptionHandler;
