import Controller from '@ember/controller';
import { action } from '@ember/object';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

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

  @action
  async registration() {
    const userId = uuidv4();
    const user = await axios.post(`http://localhost:5000/users`, {
      id: userId,
      name: this.form.name,
      password: this.form.password
    });
    if(user.status == 201) {
      const projectId = uuidv4()
      const project = await axios.post(`http://localhost:5000/projects`, {
        id: projectId,
        balance: 0,
        title: `Project-${projectId} `,
        date: new Date().toISOString(),
        userId: userId
      });
      if(project.status == 201) {
        alert('User created!')
      }
    }
  }
}