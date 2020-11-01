import Controller from '@ember/controller';
import { action } from '@ember/object';
import DS from 'ember-data';

export default class HomeIndexController extends Controller {
  form = {
    "name": '',
    "password": '',
  }

  @action
  async login() {
    this.store.query('user', {name: this.form.name}).then((res) => {
      // console.log('./././././././././', res.content[0]._recordData._data);
      const user = res.content[0]._recordData._data;

      if(user.password == this.form.password) {
        this.transitionToRoute('home.user', user.name);
      }
    })
    // const user = response[0];
    // console.log('<<<<<<<<<<<<<<<<<', this.response);


    // if(user != null) {
    //   this.transitionToRoute('home.user', user.id);
    // }
  }
}