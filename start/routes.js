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
Route.resource('people', 'PersonController').apiOnly();

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
Route.resource('federations', 'FederationController').apiOnly();

// Clubs
Route.resource('clubs', 'ClubController').apiOnly();

// Athletes
Route.resource('athletes', 'AthleteController').apiOnly();

/**
 * Event
 */
Route.resource('ttevents', 'TTEventController').apiOnly();
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
    'TTEvent/Championship/ConfrontController'
  ).apiOnly();

  // Athlete Inscription
  Route.resource(
    'athlete-inscriptions',
    'TTEvent/Championship/AthleteInscriptionController'
  ).apiOnly();
}).prefix('championships/:championship_id/');

