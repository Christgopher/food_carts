import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name: DS.attr('string'),
  foodType: DS.attr('string'),
  ratings: DS.hasMany('rating', {async: true}),
  waitTime: DS.attr('string'),
});
