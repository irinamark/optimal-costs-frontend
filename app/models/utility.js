import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class UtilityModel extends Model {
  @attr('string') id;
  @attr('string') title;
  @attr('number') value;
  @attr('string') projectId;
  @belongsTo('project') project;
}
