import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class ProjectModel extends Model {
  // @attr('string') id;
  @attr('string') title;
  @attr('number') balance;
  @attr('string') date;
  @attr('string') userId;
  @belongsTo('user') user;
  @hasMany('other') others;
  @hasMany('worker') workers;
  @hasMany('equipment') equipments;
  @hasMany('utility') utilities;
}
