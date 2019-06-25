const { TTEvent, Address, User } = use('App/Models');
const Database = use('Database');

class TTEventController {
  async index({ request }) {
    return TTEvent
            .query()
            .paginate(
              request.input('page', 1),
              request.input('perPage', 10)
            );
  }

  async store({ request }) {
    const data = request.only(TTEvent.columns());
    const {
      owner_id: ownerId,
      address: addressData,
      entries: entriesData,
      championships: championshipsData,
    } = request.all();

    const user = await User.findOrFail(ownerId);
    data.owner_id = user.id;

    const trx = await Database.beginTransaction();

    const address = await Address.create(addressData, trx);
    data.address_id = address.id;

    const ttevent = await TTEvent.create(data, trx);
    await ttevent.entries().createMany([...entriesData], trx);
    await ttevent.championships().createMany([...championshipsData], trx);

    await trx.commit();

    return ttevent;
  }

  async show({ params }) {
    const ttevent = await TTEvent.findOrFail(params.id);
    await ttevent.loadMany(['owner', 'address', 'entries', 'championships', 'tables']);
    return ttevent;
  }

  async update({ params, request }) {
    const data = request.only(TTEvent.columns());
    const ttevent = await TTEvent.findOrFail(params.id);

    ttevent.merge(data);

    await ttevent.save();
    return ttevent;
  }

  async destroy({ params }) {
    const ttevent = await TTEvent.findOrFail(params.id);
    const address = await TTEvent.address().fetch();

    await ttevent.entries().delete();
    await ttevent.championships().delete();
    await address.delete();

    return ttevent.delete();
  }
}

module.exports = TTEventController;
