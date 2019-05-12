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

// Athletes
Route.resource('users.athletes', 'AthleteController').apiOnly();

// Athlete Inscription
Route.resource(
  'events.championships.athlete-inscriptions',
  'Event/AthleteInscriptionController',
).apiOnly();
