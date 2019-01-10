![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Data Modeling

### Author: Becca Lee
paired on part of lab with Hannah Ingham

### Links and Resources
![Build Status](https://www.travis-ci.com/beccalee123/13-rest-server.svg?branch=master)
* [repo](https://github.com/beccalee123/13-rest-server)
* [travis](https://www.travis-ci.com/beccalee123/13-rest-server)
* [heroku](http://xyz.com) (when applicable)

#### Documentation
* [swagger](http://xyz.com) - TBD
* [jsdoc](http://xyz.com) - TBD

### Modules
- `models/categories.js` contains the category models
- `models/products.js` contains the category models
- `models/product-schema.js` contains the product schema for mongo db
- `middleware/404.js` contains the 404 error
- `middleware/error.js` contains other errors
- `api/categories.js` contains the categories routes and corresponding functions
- `api/products.js` contains the products routes and corresponding functions
- `app.js` contains all the app.use info
- `index.js` contains the core server functionality

### Setup
#### `.env` requirements
* `PORT` - 3000 or defined by ENV
* `MONGODB_URI` - `mongodb://localhost:27017/products`

#### Running the app
* install httpie, nodemon, and mongo db
* in a terminal window, run the server file with nodemon `nodemon index.js`
* in another terminal window, run the port with httpie `http :3000`
* Then, run mongodb
  * `start mongodb path path/to/database`
  * `start mongod in another window`
  * `show dbs`
  * `connect: db = connect("localhost:27017/products")`
  * `run: db.products.find().pretty(); to print all items in db`
* For the GET endpoint, you can either see all books/movies `/categories` or `/products` or request a specific id (ie `categories/<id>`). 
  * To view, enter `http GET :3000/categories` or `http GET :8080/categories/<id>`. Sub products for categories in the routes to see products db data
  * Returns a JSON object with all products/categories or a selected record in it.
* For the POST endpoint, you can add an item to categories (`/categories`) or products(`/products`). 
  * To add a category, enter `echo '{"name":"Category Name","description":"Category Description"}' |http POST :3000/categories`
  * To add a product, enter `echo '{"name":"Product Name","description":"Product Description"}' |http POST :3000/products`
  * Adds a JSON object to the products or categories db.
* For the PUT endpoint, you can update a record in products (`/products`) or categories (`/categories`). 
  * * To update a product, enter `echo 'echo '{"name":"Product Name","description":"Product Description"}' |http PUT :3000/products`
  * To update a category, enter `echo '{"name":"Category Name","description":"Category Description"}' |http PUT :3000/categories`
* For the DELETE endpoint, you can delete a specific record in categories (`categories`) or products (`products`).
  * To delete a record, enter `http DELETE :3000/products/<id>`. For a categories record, sub posts for products. You can enter any existing record number to delete.
  
#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

Tests were run on the categories model to determine if their core functionality was working correctly.

Other tests should be created for the products models and the server functionality