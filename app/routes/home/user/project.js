import Route from '@ember/routing/route';

export default class HomeUserProjectRoute extends Route {
  model() {
    const user = this.paramsFor('home.user')
    const project = this.store.query('project', { userId: user.user_id });
    return project;
  }
}
