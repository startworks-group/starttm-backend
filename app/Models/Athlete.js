const BaseModel = use('MongooseModel');
const { Schema } = use('mongoose');

class Athlete extends BaseModel {
  static boot({ schema }) {}

  static get schema() {
    return {
      user: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: 'User',
      },
      rating: {
        type: Number,
        required: true,
      },
      ranking: {
        type: Number,
        required: true,
        min: 0,
        max: 9,
      },
      federation: {
        type: Schema.Types.ObjectId,
        refs: 'Federation',
      },
    };
  }
}

module.exports = Athlete.buildModel('Athlete');
