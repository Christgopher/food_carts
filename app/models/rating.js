import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  cart: DS.belongsTo('cart', {async: true}),
  rating: DS.attr('string'),
  comment: DS.attr('string'),
  author: DS.attr('string')
});
