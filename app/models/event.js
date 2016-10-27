import DS from 'ember-data';

export default DS.Model.extend({

  startsAt: DS.attr('date'),
  endsAt:   DS.attr('date'),
  description: DS.attr('string'),

  school: DS.belongsTo('school'),
  ministry: DS.belongsTo('ministry')

});
