const { Person, User, Address } = use('App/Models');
const Database = use('Database');

class PersonController {
  async index() {
    const people = await Person.all();
    return people;
  }

  async store({ request, params }) {
    const { users_id } = params;

    const data = request.only(Person.columns());
    const addressData = request.input('address');

    const user = await User.findOrFail(users_id);

    const trx = await Database.beginTransaction();

    const person = await user.person().create(data, trx);
    const address = await Address.create(addressData, trx);

    await person.address().attach([address.id], null, trx);

    trx.commit();

    return person;
  }

  async show({ params }) {
    const person = await Person.findOrFail(params.id);

    person.load('address');

    return person;
  }

  async update({ params, request }) {
    const updateColumns = Person.columns().filter(item => !['address_id'].includes(item));

    const data = request.only(updateColumns);
    const person = await Person.findOrFail(params.id);

    person.merge(data);

    await person.save();

    return person;
  }

  async destroy({ params }) {
    const person = await Person.findOrFail(params.id);
    const resp = await person.delete();

    return resp;
  }
}

module.exports = PersonController;
