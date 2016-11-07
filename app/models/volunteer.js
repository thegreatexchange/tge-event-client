import DS from 'ember-data';

export default DS.Model.extend({

  createdAt:   DS.attr('date'),
  updatedAt:   DS.attr('date'),
  name:        DS.attr('string'),
  email:       DS.attr('string'),
  phoneNumber: DS.attr('string'),
  location:    DS.attr('string'),
  eventId:     DS.attr('string'),
  comments:    DS.attr('string'),

  isEmailEnabled: DS.attr('boolean', { defaultValue: true }),
  isTextEnabled:  DS.attr('boolean', { defaultValue: true }),

  school:   DS.belongsTo('school'),
  ministry: DS.belongsTo('ministry')

});
