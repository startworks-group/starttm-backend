'use strict';

const Route = use('Route');

Route.get('/', () => {
  return {greeting: 'Hello world in JSON'};
});

// Subscriptions
Route.post('/subscriptions', 'Auth/SubscriptionController.store');

// Users
Route.post('/users', 'UserController.store');
Route.get('/users', 'UserController.index');
Route.get('/users/:id', 'UserController.show');

// People
Route.resource('/people', 'PersonController').apiOnly();
