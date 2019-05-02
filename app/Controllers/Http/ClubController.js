const { Club, Address } = use('App/Models');
const Database = use('Database');

class ClubController {
  async index() {
    const clubs = await Club.all();
    return clubs;
  }

  async store({ request }) {
    const data = request.only(Club.columns());
    const addressData = request.input('address');

    const trx = await Database.beginTransaction();

    const address = await Address.create(addressData, trx);

    data.address_id = address.id;
    const club = await Club.create(data, trx);

    await trx.commit();

    return club;
  }

  async show({ params }) {
    const club = await Club.findOrFail(params.id);

    await club.loadMany(['address', 'federation']);

    return club;
  }

  async update({ params, request }) {
    const data = request.only(Club.columns());
    const club = await Club.findOrFail(params.id);

    club.merge(data);
    await club.save();

    return club;
  }

  async destroy({ params }) {
    const club = await Club.findOrFail(params.id);
    const address = await club.address().fetch();

    const resp = await club.delete();
    await address.delete();

    return resp;
  }
}

module.exports = ClubController;
