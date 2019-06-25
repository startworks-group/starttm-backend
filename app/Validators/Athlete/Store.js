const Antl = use('Antl');

class AthleteStore {
  get rules () {
    return {
      user_id: 'required|integer|unique:athletes',
      federation_id: 'required|integer',
      rating: 'required|integer',
    }
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = AthleteStore;