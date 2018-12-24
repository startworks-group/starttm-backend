

const BaseModel = use('MongooseModel');

class Federation extends BaseModel {
  static boot({ schema }) {
    this.index({ name: 1 }, { background: true });
  }

  static get schema() {
    return {
      uf: {
        type: String,
        required: true,
        enum: ['RN', 'SP', 'AC'], // Tem outros
      },
      name: {
        type: String,
        required: true,
        unique: true,
      },
      initials: {
        type: String,
        required: true,
      },
    };
  }
}

module.exports = Federation.buildModel('Federation');
