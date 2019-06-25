const Antl = use('Antl');

class ClubStore {
  get rules () {
    return {
      federation_id: 'required|integer',
      name: 'required',
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

module.exports = ClubStore;