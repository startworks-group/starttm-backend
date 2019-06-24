const Antl = use('Antl');

class FederationStore {
  get rules () {
    return {
      name: 'required|unique:federations', // TODO verificar se podemos alterar o nome da federação      
      initials: 'required|unique:federations',
      uf: 'required', // TODO using ufs validos
    }
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = FederationStore;