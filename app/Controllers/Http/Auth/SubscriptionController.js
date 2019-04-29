const Hash = use('Hash');
const Mail = use('Mail');
const { Subscription } = use('App/Models');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with subscriptions
 */
class SubscriptionController {
  /**
   * Show a list of all subscriptions.
   * GET subscriptions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {}

  /**
   * Create/save a new subscription.
   * POST subscriptions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const redirectUrl = request.input('redirectUrl');
    const data = request.only(['username', 'email', 'password']);

    const token = await Hash.make(data.username + data.email + data.password);

    await Subscription.create({ ...data, token });

    await Mail.send('emails.subscription', { ...data, redirectUrl }, (message) => {
      message
        .to(data.email)
        .from('starttm@account.com')
        .subject('Confirm Email Address');
    });

    response.status(202).send({
      message: 'Confirmation email has been send',
      link: `${redirectUrl}${token}`,
    });
  }

  /**
   * Display a single subscription.
   * GET subscriptions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({
    params, request, response, view,
  }) {}

  /**
   * Render a form to update an existing subscription.
   * GET subscriptions/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({
    params, request, response, view,
  }) {}

  /**
   * Update subscription details.
   * PUT or PATCH subscriptions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a subscription with id.
   * DELETE subscriptions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = SubscriptionController;
