'use strict';

const { Table, Event } = use('App/Models');

class TableController {
  async index({ params }) {
    const { events_id: event_id } = params;
    const tables = await Table.query()
      .where({ event_id })
      .fetch();

    return tables;
  }

  async store({ request, params }) {
    const { events_id } = params;
    const data = request.only(Table.columns());

    const event = await Event.findOrFail(events_id);
    const table = await event.tables().create(data);

    return table;
  }

  async show({ params }) {
    const { id } = params;
    const table = await Table.findOrFail(id);

    await table.loadMany(['confronts']);

    return table;
  }

  async update({ params, request }) {
    const data = request.only(Table.columns());
    const { id } = params;

    const table = await Table.findOrFail(id);

    table.merge(data);
    await table.save();

    return table;
  }

  async destroy({ params }) {
    const { id } = params;

    const table = await Table.findOrFail(id);
    const resp = await table.delete();

    return resp;
  }
}

module.exports = TableController;
