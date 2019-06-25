const { Athlete, User } = use('App/Models');

class AthleteController {
  async index({ request }) {
    return Athlete
            .query()
            .paginate(
              request.input('page', 1),
              request.input('perPage', 10)
            );
  }

  async show({ params }) {
    const athlete = await Athlete.findOrFail(params.id);

    await athlete.loadMany(['federation', 'championshipInscriptions']);

    return athlete;
  }

  async store({ request, params }) {
    const data = request.only(Athlete.columns());

    // TODO quando o atleta for criado para um usuário
    // o usuário deve ganhar o "role" de "[Athlete]"
    return Athlete.create(data);
  }

  async update({ params, request }) {
    const data = request.only(Athlete.columns());

    const athlete = await Athlete.findOrFail(params.id);

    athlete.merge(data);

    await athlete.save();

    return athlete;
  }

  async destroy({ params }) {
    const athlete = await Athlete.findOrFail(params.id);

    // TODO quando o atleta for deletado para um usuário
    // o usuário deve perder o "role" de "[Athlete]"

    return athlete.delete();
  }
}

module.exports = AthleteController;
