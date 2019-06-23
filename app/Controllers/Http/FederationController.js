const { Federation, User } = use('App/Models');

class FederationController {
  async index({ request }) {
    return Federation
            .query()
            .paginate(
              request.input('page', 1),
              request.input('perPage', 10)
            );
  }

  async store({ request }) {
    const data = request.only(Federation.columns());
    const federation = await Federation.create(data);

    return federation;
  }

  async show({ params }) {
    return Federation.findOrFail(params.id);
  }

  async update({ params, request }) {
    const data = request.only(Federation.columns());
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
