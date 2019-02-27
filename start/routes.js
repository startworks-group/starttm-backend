'use strict';

const Route = use('Route');

Route.get('/', () => {
  return {starttm: 'Bem vindo ao sistema Start TM'};
});

// Subscriptions
Route.post('/subscriptions', 'Auth/SubscriptionController.store');

// Confirmation
Route.get('/confirmations/:token', 'Auth/ConfirmationController.show');

// Users
Route.resource('users', 'UserController').apiOnly();

// Federations
Route.resource('federations', 'FederationController').apiOnly();

// Clubs
Route.resource('clubs', 'ClubController').apiOnly();
