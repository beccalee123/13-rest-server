'use strict';

const product = require('./product-schema.js');

class Products {

  constructor() {
    this.database = [];
  }

  get(_id) {
    let queryObject = _id ? {_id} : {};
    return product.find(queryObject);
  }
  
  post(entry) {
    let newRecord = new product(entry);
    return newRecord.save();
  }

  put(id, entry) {
    entry._id = id;
    return product.update({'_id': id}, {$set:{'name':entry.name, 'description':entry.description}});
  }

  delete(id) {
    return product.deleteOne({'_id': id});
  }

}

// put(_id, entry) {
//   for(let i = 0; i < this.database.length; i++){
//     if(entry._id === this.database[i]['_id']){
//       this.database[i] = record;
//     }
//   }
//   return Promise.resolve(record);
// }

// delete(_id) {
//   this.database = this.database.filter((record) => record._id !== _id);
//   return Promise.resolve({});
// }


module.exports = Products;
