'use strict';

const { base, ttevent, championship } = use('App/Utils/ModelsPath');

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
const TTEvent = use(`${ttevent}`);
const Entry = use(`${ttevent}/Entry`);
const Table = use(`${ttevent}/Table`);

/**
 * Championship
 */
const Championship = use(`${championship}`);
const Confront = use(`${championship}/Confront`);
const AthleteInscription = use(`${championship}/AthleteInscription`);

module.exports = {
  User,
  Person,
  Address,
  Subscription,
  Club,
  Federation,
  Athlete,

  TTEvent,
  Entry,
  Table,

  Championship,
  AthleteInscription,
  Confront,
};
