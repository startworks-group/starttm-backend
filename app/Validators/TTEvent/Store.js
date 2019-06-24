const Antl = use('Antl');

class TTEventStore {
  get rules () {
    return {
      owner_id: 'required',
      type: 'required|in:school,state,intrastate,national,club',
      name: 'required',
      start: 'required|date',
      end: 'required|date',
      'address.street': 'required',
      'address.number': 'required|integer',
      'address.neighborhood': 'required',
      'address.cep': 'required|integer',
      'address.city': 'required',
      'address.state': 'required',
      'entries.*.type': 'required', // TODO definir types
      'entries.*.price': 'required', // TODO pegar valor double ou float
      'championships.*.sex': 'required|in:M,F',
      'championships.*.type': 'required', // TODO definir types
      'championships.*.upperLimit': 'required|integer',
      'championships.*.downLimit': 'required|integer',
    }
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = TTEventStore;