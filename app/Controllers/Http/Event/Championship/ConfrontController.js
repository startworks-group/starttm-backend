const { Confront, Championship } = use('App/Models');

class ConfrontController {
  async index({ params }) {
    const { championships_id: championship_id } = params;

    const confronts = await Confront.query()
      .where({ championship_id })
      .fetch();

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

    await confront.loadMany(['playerOne', 'playerTwo', 'sets', 'table']);

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
