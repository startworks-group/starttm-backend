const { Person, User, Address } = use('App/Models');
const Database = use('Database');

class PersonController {
  async index({ request }) {
    return Person
            .query()
            .paginate(
              request.input('page', 1),
              request.input('perPage', 10)
            );
  }

  async store({ request }) {
    const data = request.only(Person.columns());
    const addressData = request.input('address');

    const user = await User.findOrFail(request.input('user_id'));

    const trx = await Database.beginTransaction();

    const address = await Address.create(addressData, trx);

    data.address_id = address.id;
    const person = await Person.create(data, trx);

    await trx.commit();

    return person;
  }

  async show({ params }) {
    const person = await Person.findOrFail(params.id);

    await person.loadMany(['address', 'user']);

    return person;
  }

  async update({ params, request }) {
    const data = request.only(Person.columnsUpdate());
    const person = await Person.findOrFail(params.id);

    person.merge(data);

    await person.save();

    return person;
  }

  async destroy({ params }) {
    const person = await Person.findOrFail(params.id);
    const address = await person.address().fetch();

    await address.delete();
    return person.delete();
  }
}

module.exports = PersonController;
