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

    const address = await Address.create(addressData, trx);

    data.address_id = address.id;
    const person = await user.person().create(data, trx);

    await trx.commit();

    return person;
  }

  async show({ params }) {
    const person = await Person.findOrFail(params.id);

    await person.loadMany(['address', 'user']);

    return person;
  }

  async update({ params, request }) {
    const data = request.only(Person.columns());
    const person = await Person.findOrFail(params.id);

    person.merge(data);

    await person.save();

    return person;
  }

  async destroy({ params }) {
    const person = await Person.findOrFail(params.id);
    const address = await person.address().fetch();

    await person.delete();
    await address.delete();

    return person;
  }
}

module.exports = PersonController;
