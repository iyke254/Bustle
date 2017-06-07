import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  author: DS.attr(),
  time: DS.attr()
});
