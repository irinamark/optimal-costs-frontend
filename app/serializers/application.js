import JSONSerializer from '@ember-data/serializer/json';
import { underscore } from '@ember/string';
import { get } from '@ember/object';
import DS from 'ember-data';

// export default JSONSerializer.extend({

//   // serialize(snapshot, options) {
//   //   console.log("snapshot", snapshot);
//   //   console.log("options", options);
//   //   console.log("super", this._super(...arguments));
//   //   const obj = this._super(...arguments);
//   //   obj["id"] = snapshot.id
//   //   const resultObj = {};


//   //   for(let key in obj) {
//   //     resultObj[`"${key}"`] = obj.key;
//   //     // key = key.toString();
//   //     console.log('key', key)
//   //   }

//   //   // console.log(JSON.stringify(obj));
//   //   // return JSON.stringify(obj);
//   //   return resultObj;
//   // }
// });

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
    // attrs: {
    //     projects: {
    //         serialize: 'records',
    //         deserialize: 'records'
    //     },
    //     //   tasks: {
    //     //     serialize: 'records',
    //     //     deserialize: 'records'
    //     // }
    // }
});