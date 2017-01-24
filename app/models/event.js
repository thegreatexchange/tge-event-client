import DS from 'ember-data';

export default DS.Model.extend({

  createdAt:   DS.attr('date'),
  updatedAt:   DS.attr('date'),
  name:        DS.attr('string'),
  description: DS.attr('string'),
  startsAt:    DS.attr('date'),
  endsAt:      DS.attr('date'),

  organization: DS.belongsTo('organization')

});
