'use strict';

const { AthleteInscription, Championship } = use('App/Models');

class AthleteInscriptionController {
  async index() {
    const inscriptions = await AthleteInscription.all();
    return inscriptions;
  }

  async store({ request, params }) {
    const data = await request.only(AthleteInscription.columns());

    const championship = await Championship.findOrFail(params.championships_id);

    const inscription = await championship.athleteInscriptions().create(data);

    return inscription;
  }

  async show({ params }) {
    const athleteInscription = await AthleteInscription.findOrFail(params.id);

    await athleteInscription.loadMany(['championship', 'athlete']);

    return athleteInscription;
  }

  async update({ params, request }) {
    const data = request.only(['approved']);

    const athleteInscription = await AthleteInscription.findOrFail(params.id);

    athleteInscription.merge(data);

    await athleteInscription.save();

    return athleteInscription;
  }

  async destroy({ params }) {
    const athleteInscription = await AthleteInscription.findOrFail(params.id);

    const resp = await athleteInscription.delete();

    return resp;
  }
}

module.exports = AthleteInscriptionController;
