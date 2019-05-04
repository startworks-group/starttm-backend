const { Event, Address } = use('App/Models');
const Database = use('Database');

class EventController {
  async index() {
    const events = await Event.all();
    return events;
  }

  async store({ request }) {
    const data = request.only(Event.columns());
    const {
      address: addressData,
      entries: entriesData,
      championships: championshipsData,
    } = request.all();

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
    await event.loadMany(['address', 'entries', 'championships']);
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
