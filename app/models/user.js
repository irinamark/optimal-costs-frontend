import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  // @attr('string') id;
  @attr('string') name;
  @attr('string') password;
  @hasMany('project') projects;
}
