/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
Route.get('/', () => ({ starttm: 'Bem vindo ao sistema Start TM' }));

// Subscriptions
Route
  .post('/subscriptions', 'Auth/SubscriptionController.store')
  .validator('Auth/Subscription/Store');

/**
 * Users
 */
Route.resource('users', 'UserController').apiOnly();

// People
Route.resource('people', 'PersonController')
  .apiOnly()
  .validator(new Map([[['people.store'], ['Person/Store']]]));

/**
 * Auth Sessions
 */
Route.resource('sessions', 'Auth/SessionController');

/**
 * Auth Permissions
 */
Route.resource('permissions', 'Auth/Roles/PermissionController')
  .apiOnly()
  .middleware('auth');

/**
 * Auth Roles
 */
Route.resource('roles', 'Auth/RoleController')
  .apiOnly()
  .middleware('auth');

// Federations
Route.resource('federations', 'FederationController')
  .apiOnly()
  .validator(new Map([[['federations.store'], ['Federation/Store']]]));

// Clubs
Route.resource('clubs', 'ClubController')
  .apiOnly()
  .validator(new Map([[['clubs.store'], ['Club/Store']]]));

// Athletes
Route.resource('athletes', 'AthleteController')
  .apiOnly()
  .validator(new Map([[['athletes.store'], ['Athlete/Store']]]));

/**
 * TTEvent
 */
Route.resource('ttevents', 'TTEventController')
  .apiOnly()
  .validator(new Map([[['ttevents.store'], ['TTEvent/Store']]]));

Route.group(() => {
  // Table
  Route.resource('tables', 'TTEvent/TableController').apiOnly();

  // Championship
  Route.resource('championships', 'TTEvent/ChampionshipController').apiOnly();
})
  .prefix('ttevents/:ttevent_id/')
  .middleware(['auth', 'is:(federation)']);

/**
 * Championship
 */
Route.group(() => {
  // Confront
  Route.resource(
    'confronts',
    'TTEvent/Championship/ConfrontController',
  ).apiOnly();

  // Athlete Inscription
  Route.resource(
    'athlete-inscriptions',
    'TTEvent/Championship/AthleteInscriptionController',
  ).apiOnly();

  // Group
  Route.resource('groups', 'TTEvent/Championship/GroupController').apiOnly();
}).prefix('championships/:championship_id/');
