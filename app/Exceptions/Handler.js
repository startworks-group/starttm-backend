const BaseExceptionHandler = use('BaseExceptionHandler');

const Env = use('Env');
const Youch = require('youch');

class ExceptionHandler extends BaseExceptionHandler {
  async handle (error, { response, request }) {
    if ( error.name === 'ValidationException' ) {
	   return response.status(422).json({ validation: error.messages })
	  }

    if ( error.status === 404 ) {
      console.log(request);
     return response
              .status(404)
              .json({ 
                request: request.body, 
                message: "Recurso não encontrado",
                status: 404
              });
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
