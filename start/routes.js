'use strict';

const Route = use('Route');

Route.get('/', () => {
  return {greeting: 'Hello world in JSON'};
});

// Subscription
Route.post('/subscriptions', 'Auth/SubscriptionController.store');

// User
Route.post('/users', 'UserController.store');
