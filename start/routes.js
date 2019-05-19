/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
Route.get('/', () => ({ starttm: 'Bem vindo ao sistema Start TM' }));

// Subscriptions
Route.post('/subscriptions', 'Auth/SubscriptionController.store');

// Federations
Route.resource('federations', 'FederationController').apiOnly();

// Clubs
Route.resource('clubs', 'ClubController').apiOnly();

/**
 * Users
 */
Route.resource('users', 'UserController').apiOnly();
Route.group(() => {
  // People
  Route.resource('people', 'PersonController').apiOnly();

  // Athletes
  Route.resource('athletes', 'AthleteController').apiOnly();
}).prefix('users/:users_id/');

/**
 * Event
 */
Route.resource('events', 'EventController').apiOnly();
Route.group(() => {
  // Table
  Route.resource('tables', 'Event/TableController').apiOnly();

  // Championship
  Route.resource('championships', 'Event/ChampionshipController').apiOnly();
}).prefix('events/:events_id/');

/**
 * Championship
 */
Route.group(() => {
  // Confront
  Route.resource('confronts', 'Event/Championship/ConfrontController').apiOnly();

  // Athlete Inscription
  Route.resource(
    'athlete-inscriptions',
    'Event/Championship/AthleteInscriptionController',
  ).apiOnly();
}).prefix('championships/:championships_id/');
