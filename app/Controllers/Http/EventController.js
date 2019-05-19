const { Event, Address, User } = use('App/Models');
const Database = use('Database');

class EventController {
  async index() {
    const events = await Event.all();
    return events;
  }

  async store({ request }) {
    const data = request.only(Event.columns());
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

    const event = await Event.create(data, trx);
    await event.entries().createMany([...entriesData], trx);
    await event.championships().createMany([...championshipsData], trx);

    await trx.commit();

    return address;
  }

  async show({ params }) {
    const event = await Event.findOrFail(params.id);
    await event.loadMany(['owner', 'address', 'entries', 'championships', 'tables']);
    return event;
  }

  async update({ params, request }) {
    const data = request.only(Event.columns());
    const event = await Event.findOrFail(params.id);

    event.merge(data);

    await event.save();
    return event;
  }

  async destroy({ params }) {
    const event = await Event.findOrFail(params.id);
    const address = await event.address().fetch();

    await event.entries().delete();
    await event.championships().delete();
    await address.delete();

    const resp = await event.delete();
    return resp;
  }
}

module.exports = EventController;
