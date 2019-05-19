'use strict';

const { base, event, championship } = use('App/Utils/ModelsPath');

const Subscription = use(`${base}/Auth/Subscription`);
const User = use(`${base}/User`);
const Person = use(`${base}/Person`);
const Address = use(`${base}/Address`);
const Club = use(`${base}/Club`);
const Federation = use(`${base}/Federation`);
const Athlete = use(`${base}/Athlete`);

/**
 * Event
 */
const Event = use(`${event}`);
const Entry = use(`${event}/Entry`);
const Table = use(`${event}/Table`);

/**
 * Championship
 */
const Championship = use(`${championship}`);
const Confront = use(`${championship}/Confront`);
const AthleteInscription = use('App/Models/Event/AthleteInscription');

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
  Table,

  Championship,
  AthleteInscription,
  Confront,
};
