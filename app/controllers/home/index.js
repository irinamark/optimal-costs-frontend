import Controller from '@ember/controller';
import { action } from '@ember/object';
import axios from 'axios';

export default class HomeIndexController extends Controller {
  form = {
    "name": '',
    "password": '',
  }

  @action
  async login() {
    const user = (await axios.get(`http://localhost:5000/users/${this.form.name}`)).data;
    if (user.password == this.form.password) {
      this.transitionToRoute('home.user', user.id);
    }
  }
}