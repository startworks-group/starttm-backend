const Hash = use('Hash');
// const Mail = use('Mail');
const { Subscription } = use('App/Models');

class SubscriptionController {
  async store({ request, response }) {
    const redirectUrl = request.input('redirect_url');
    const data = request.only(['username', 'email', 'password']);

    const hash = await Hash.make(data.username + data.email + data.password);

    const token = hash.replace('/', '');

    await Subscription.create({ ...data, token });

    // TODO implementar Queue
    //
    // await Mail.send('emails.subscription', { ...data, redirectUrl }, (message) => {
    //   message
    //     .to(data.email)
    //     .from('starttm@account.com')
    //     .subject('Confirm Email Address');
    // });

    response.status(202).send({
      message: 'Confirmation email has been send',
      link: `${redirectUrl}/${token}`,
      token,
    });
  }
}

module.exports = SubscriptionController;
