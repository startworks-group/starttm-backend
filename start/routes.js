'use strict';

const Route = use('Route');

Route.get('/', () => {
  return {greeting: 'Hello world in JSON'};
});

// Subscriptions
Route.post('/subscriptions', 'Auth/SubscriptionController.store');

// Users
Route.resource('users', 'UserController').apiOnly();

// Federations
Route.resource('federations', 'FederationController').apiOnly();

// Clubs
Route.resource('clubs', 'ClubController').apiOnly();
