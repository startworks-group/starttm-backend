const Route = use('Route');

Route.get('/', () => ({ starttm: 'Bem vindo ao sistema Start TM' }));

// Subscriptions
Route.post('/subscriptions', 'Auth/SubscriptionController.store');

// Users
Route.resource('users', 'UserController').apiOnly();

// People
Route.resource('users.people', 'PersonController').apiOnly();

// Federations
Route.resource('federations', 'FederationController').apiOnly();

// Clubs
Route.resource('clubs', 'ClubController').apiOnly();

// Events
Route.resource('events', 'EventController').apiOnly();

// Championships
Route.resource('events.championships', 'Event/ChampionshipController').apiOnly();

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

  // Group
  Route.resource('groups', 'Event/Championship/GroupController').apiOnly();
}).prefix('championships/:championships_id/');
