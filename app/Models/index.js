const User = use('App/Models/User');
const Person = use('App/Models/Person');
const Address = use('App/Models/Address');
const Subscription = use('App/Models/Auth/Subscription');
const Club = use('App/Models/Club');
const Federation = use('App/Models/Federation');
const Athlete = use('App/Models/Athlete');

// Event
const Event = use('App/Models/Event');
const Entry = use('App/Models/Event/Entry');

// Championship
const Championship = use('App/Models/Event/Championship');
const AthleteInscription = use('App/Models/Event/AthleteInscription');
const Confront = use('App/Models/Event/Championship/Confront');

module.exports = {
  User,
  Person,
  Address,
  Subscription,
  Club,
  Federation,
  Athlete,

  Event,
  Entry,

  Championship,
  AthleteInscription,
  Confront,
};
