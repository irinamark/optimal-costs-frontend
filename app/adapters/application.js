import RESTAdapter from '@ember-data/adapter/rest';

export default RESTAdapter.extend({
  host: 'http://localhost:5000'
});
// import JSONAPIAdapter from '@ember-data/adapter/json-api';

// export default JSONAPIAdapter.extend({
//   host: 'http://localhost:5000'
// });
