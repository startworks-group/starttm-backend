'use strict';

const Federation = use('App/Models/Federation');
const columns = ['name', 'initials', 'uf'];

class FederationController {
  async index({ request }) {
    const federations = await Federation.all();
    return federations;
  }

  async store({ request }) {
    const data = request.only(columns);
    const federation = await Federation.create(data);

    return federation;
  }

  async show({ params }) {
    const federation = await Federation.findOrFail(params.id);
    return federation;
  }

  async update({ params, request }) {
    const data = request.only(columns);
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
