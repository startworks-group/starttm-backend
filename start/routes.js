/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
Route.get('/', () => ({ starttm: 'Bem vindo ao sistema Start TM' }));

// Subscriptions
Route
  .post('/subscriptions', 'Auth/SubscriptionController.store')
  .validator('Auth/Subscription/Store');

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
Route.resource('events', 'EventController').apiOnly();

/**
 * Event
 */
Route.group(() => {
  // Table
  Route.resource('tables', 'Event/TableController').apiOnly();

  // Championship
  Route.resource('championships', 'Event/ChampionshipController').apiOnly();
})
  .prefix('events/:events_id/')
  .middleware(['auth', 'is:(federation)']);

/**
 * Championship
 */
Route.group(() => {
  // Confront
  Route.resource(
    'confronts',
    'Event/Championship/ConfrontController'
  ).apiOnly();

  // Athlete Inscription
  Route.resource(
    'athlete-inscriptions',
    'Event/Championship/AthleteInscriptionController'
  ).apiOnly();
}).prefix('championships/:championships_id/');

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
