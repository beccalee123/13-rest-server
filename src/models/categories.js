'use strict';

const uuid = require('uuid/v4');

const schema = {
  _id: {required:true},
  name: {required:true},
  description: {require:true},
};

class Categories {

  constructor() {
    this.database = [];
  }

  get(_id) {
    let response = _id ? this.database.filter( record => record._id === _id) : this.database;
    return Promise.resolve(response);
  }
  
  post(entry) {
    entry._id = uuid();
    let record = this.sanitize(entry);
    if(record._id){this.database.push(record);}
    return Promise.resolve(record);

  }

  put(_id, entry) {
    entry._id = _id;
    let record = this.sanitize(entry);
    for(let i = 0; i < this.database.length; i++){
      if(entry._id === this.database[i]['_id']){
        this.database[i] = record;
      }
    }
    return Promise.resolve(record);
  }

  delete(_id) {
    this.database = this.database.filter((record) => record._id !== _id);
    return Promise.resolve({});
  }

  sanitize(data) {
    let valid = true;
    let record = {};
    for(let key in schema){
      if(schema[key].required){
        if(data[key]){
          record[key] = data[key];
        }
        else {
          valid=false;
        } 
      }
      else {
        record[key] = data[key];
      }
    }
    return valid ? record : undefined;
  }

}

module.exports = Categories;
