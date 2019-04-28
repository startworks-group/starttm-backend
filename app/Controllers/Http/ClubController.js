const Club = use('App/Models/Club');
const columns = ['name', 'manager_id', 'eventManager_id', 'federation_id'];

class ClubController {
  async index({ request }) {
    const clubs = await Club.all();
    return clubs;
  }

  async store({ request }) {
    const data = request.only(columns);
    const club = await Club.create(data);

    return club;
  }

  async show({ params }) {
    const club = await Club.findOrFail(params.id);
    return club;
  }

  async update({ params, request }) {
    const data = request.only(columns);
    const club = await Club.findOrFail(params.id);

    club.merge(data);
    await club.save();

    return club;
  }

  async destroy({ params }) {
    const club = await Club.findOrFail(params.id);
    const resp = await club.delete();

    return resp;
  }
}

module.exports = ClubController;
