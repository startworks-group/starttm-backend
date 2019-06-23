const { Championship, TTEvent } = use('App/Models');

class ChampionshipController {
  async index() {
    
    //TODO retornar championships apenas para um ttevent

    const championships = await Championship.all();
    return championships;
  }

  async store({ request, params }) {
    const data = request.only(Championship.columns());

    const TTEvent = await TTEvent.findOrFail(params.TTEvent_id);
    const championship = await TTEvent.championships().create(data);

    return championship;
  }

  async show({ params }) {
    const championship = await Championship.findOrFail(params.id);

    await championship.loadMany(['athleteInscriptions']);

    return championship;
  }

  async update({ request, params }) {
    const data = request.only(Championship.columns());

    const championship = await Championship.findOrFail(params.id);

    championship.merge(data);

    await championship.save();

    return championship;
  }

  async destroy({ params }) {
    const championship = await Championship.findOrFail(params.id);

    await championship.athleteInscriptions().delete();

    return championship.delete();
  }
}

module.exports = ChampionshipController;
