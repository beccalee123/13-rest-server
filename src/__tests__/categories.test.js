'use strict';

let Category = require('../models/categories.js');

describe('Categories Model', () => {
  it('can post() a new category', () => {
    let obj = { name: 'Test Category', description: 'Test Description' };
    let category = new Category();
    return category.post(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[0][key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a category', () => {
    let obj = { name: 'Test Category', description: 'Test Description' };
    let category = new Category();
    return category.post(obj)
      .then(record => {
        return category.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can put() a category', () => {
    let obj = { name: 'Test Category', description: 'Test Description' };
    let category = new Category();
    category.post({ name: 'Test Category', description: 'Test Description' })
      .then(record => {
        record._id = 4;
        category.put(4, obj);
      })
      .then(record => {
        return category.get(record._id)
          .then(record => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can delete() a category', () => {
    let obj = { name: 'Test Category', description: 'Test Description' };
    let category = new Category();
    category.post({ name: 'Test Category', description: 'Test Description' })
      .then(record => {
        record._id = 4;
        category.delete(4);
      })
      .then(() => {
        return category.get()
          .then(records => {
            let bool = false;
            for(let i = 0; i < records.length; i++){
              if(records._id === 4){
                bool = true;
              }
            }
            expect(bool).toBe(false);
          });
      });
  });


});

