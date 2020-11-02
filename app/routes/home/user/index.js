import Route from '@ember/routing/route';
import axios from 'axios';

export default class HomeUserIndexRoute extends Route {

  project = {};
  equipments = [];
  others = [];
  workers = [];
  utilities = [];

  async model() {
    const id = this.paramsFor('home.user').index;
    const projects = (await axios.get(`http://localhost:5000/projects/${id}`)).data;
    this.project = projects[0];
    this.equipments = (await axios.get(`http://localhost:5000/equipments/${this.project.id}`)).data;
    this.others = (await axios.get(`http://localhost:5000/others/${this.project.id}`)).data;
    this.workers = (await axios.get(`http://localhost:5000/workers/${this.project.id}`)).data;
    this.utilities = (await axios.get(`http://localhost:5000/utilities/${this.project.id}`)).data;
  }

  setupController(controller) {
    controller.set('project', this.project);
    controller.set('equipments', this.equipments);
    controller.set('others', this.others);
    controller.set('workers', this.workers);
    controller.set('utilities', this.utilities);
  }
}
