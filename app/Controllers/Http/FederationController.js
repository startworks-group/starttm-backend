const { Federation, User } = use('App/Models');

class FederationController {
  async index() {
    const federations = await Federation.all();
    return federations;
  }

  async store({ request }) {
    const data = request.only(Federation.columns());

    await User.findOrFail(data.user_manager_id);
    const federation = await Federation.create(data);

    return federation;
  }

  async show({ params }) {
    const federation = await Federation.findOrFail(params.id);

    await federation.loadMany(['userManager']);

    return federation;
  }

  async update({ params, request }) {
    const updateColumns = Federation.columns().filter(
      value => !['user_manager_id'].includes(value),
    );

    const data = request.only(updateColumns);
    const federation = await Federation.findOrFail(params.id);

    federation.merge(data);
    await federation.save();

    return federation;
  }

  async destroy({ params }) {
    const federation = await Federation.findOrFail(params.id);
    const resp = await federation.delete();

    return resp;
  }
}

module.exports = FederationController;
