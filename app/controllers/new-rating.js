import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['cart'],
  actions: {
    save: function() {
      var newRating = this.store.createRecord('rating', {
        author: this.get('author'),
        comment: this.get('comment'),
        rating: this.get('model').get('rating')
      });
      newRating.save();

      var cart = this.get('controllers.cart.model');
      cart.get('ratings').pushObject(newRating);

      var ratings = cart.get('ratings');
      var ratingTotal = 0;
      raings.forEach(function(rating) {
        ratingTotal+=rating.rating;
      });
      ratingTotal /= ratings.length;
      cart.ratingTotal.set('ratingTotal', ratingTotal);

      cart.save();

      this.set('author', '');
      this.set('comment', '');
      this.set('rating', '');


      this.transitionToRoute('cart', cart.id);
    }
  }
});
