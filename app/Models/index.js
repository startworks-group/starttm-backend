const User = use('App/Models/User');
const Person = use('App/Models/Person');
const Address = use('App/Models/Address');
const Subscription = use('App/Models/Auth/Subscription');
const Club = use('App/Models/Club');
const Federation = use('App/Models/Federation');
const Athlete = use('App/Models/Athlete');

const Event = use('App/Models/Event');
const Entry = use('App/Models/Event/Entry');
const Championship = use('App/Models/Event/Championship');

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
};
