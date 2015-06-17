import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var cart = this.store.createRecord('cart', {
        name: this.get('name'),
        foodType: this.get('foodType'),
        waitTime: this.get('waitTime')
      });
      cart.save();
      this.transitionToRoute('carts');
    }
  }
});
