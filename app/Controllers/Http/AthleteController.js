const { Athlete, Federation, User } = use('App/Models');

class AthleteController {
  async index() {
    const athletes = await Athlete.all();
    return athletes;
  }

  async show({ params }) {
    const athlete = await Athlete.findOrFail(params.id);

    await athlete.loadMany(['federation', 'championshipInscriptions']);
    await athlete.load('user.person');

    return athlete;
  }

  async store({ request, params }) {
    const data = request.only(Athlete.columns());

    const user = await User.findOrFail(params.users_id);
    await Federation.findOrFail(data.federation_id);

    const athlete = await user.athlete().create(data);

    return athlete;
  }

  async update({ params, request }) {
    const data = request.only(Athlete.columns());

    const athlete = await Athlete.findOrFail(params.id);
    await Federation.findOrFail(data.federation_id);

    athlete.merge(data);

    await athlete.save();

    return athlete;
  }

  async destroy({ params }) {
    const athlete = await Athlete.findOrFail(params.id);

    const resp = await athlete.delete();

    return resp;
  }
}

module.exports = AthleteController;
