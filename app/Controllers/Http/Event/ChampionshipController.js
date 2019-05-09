const { Championship, Event } = use('App/Models');

class ChampionshipController {
  async index({ request, response, view }) {
    const championships = await Championship.all();
    return championships;
  }

  async store({ request, params }) {
    const data = request.only(Championship.columns());

    const event = await Event.findOrFail(params.events_id);
    const championship = await event.championships().create(data);

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

    const resp = await championship.delete();

    return resp;
  }
}

module.exports = ChampionshipController;
