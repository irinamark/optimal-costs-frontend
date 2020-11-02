import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', function () {
    this.route('user', { path: '/:index' }, function () {
      this.route('project', { path: '/:project_id' });
    });
  });
});
