'use strict';

const Person = use('App/Models/Person');
const Database = use('Database');
const columns = ['name', 'sex', 'birth', 'cpf', 'rg', 'address_id'];

class PersonController {
  async index({request}) {
    const people = await Person.all();
    return people;
  }

  async store({request}) {
    const data = request.only(columns);

    const trx = await Database.beginTransaction();

    const person = await Person.create(data, trx);

    return person;
  }

  async show({params}) {
    const person = await Person.findOrFail(params.id);

    person.load('address');

    return person;
  }

  async update({params, request}) {
    const updateColumns = columns.filter(
        (item) => !['address_id'].includes(item)
    );

    const data = request.only(updateColumns);
    const person = await Person.findOrFail(params.id);

    person.merge(data);

    await person.save();

    return person;
  }

  async destroy({params}) {
    const person = await Person.findOrFail(params.id);
    const resp = await person.delete();

    return resp;
  }
}

module.exports = PersonController;
