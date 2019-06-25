const Antl = use('Antl');

class PersonStore {
  get rules () {
    return {
      user_id: 'required|unique:people',
      name: 'required',
      sex: 'required|in:MALE,FEMALE',
      birth: 'required', // TODO date valido
      cpf: 'required|integer',
      rg: 'required|integer',
      'address.street': 'required',
      'address.number': 'required|integer',
      'address.neighborhood': 'required',
      'address.cep': 'required|integer',
      'address.city': 'required',
      'address.state': 'required',
    }
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = PersonStore;