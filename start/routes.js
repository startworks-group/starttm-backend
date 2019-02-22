'use strict';

const Route = use('Route');

Route.get('/', () => {
  return {greeting: 'Hello world in JSON'};
});

Route.post('/subscriptions', 'Auth/SubscriptionController.store');
