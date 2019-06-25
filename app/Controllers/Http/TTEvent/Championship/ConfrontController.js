'use strict';

const { Confront, Championship } = use('App/Models');

class ConfrontController {
  async index({ params }) {
    // TODO retornar confronts apenas de um championship or ttevent
    const confronts = await Confront.all();

    return confronts;
  }

  async store({ request, params }) {
    const { championship_id } = params;
    const data = request.only(Confront.columns());

    const championship = await Championship.findOrFail(championship_id);
    const confront = await championship.confronts().create(data);

    return confront;
  }

  async show({ params }) {
    const { id } = params;

    const confront = await Confront.findOrFail(id);

    await confront.loadMany(['playerOne', 'playerTwo', 'table']);

    return confront;
  }

  async update({ params, request }) {
    const { id } = params;
    const data = request.only(Confront.columns());

    const confront = await Confront.findOrFail(id);

    confront.merge(data);

    await confront.save();

    return confront;
  }

  async destroy({ params }) {
    const { id } = params;

    const confront = await Confront.findOrFail(id);

    await confront.delete();

    return confront;
  }
}

module.exports = ConfrontController;
