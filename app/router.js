import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('carts', {path: '/'}, function() {
    this.resource('new');
    this.resource('cart', {path: 'carts/:cart_id'}, function() {
      this.resource('new-rating');
    });

  });
this.route('about');


});

export default Router;
