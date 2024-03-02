const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const RestaurantSchema = new Schema({
    title: String,
    description: String,
    foodType: String,  
    location: String,
}
);

const RestaurantModel = model('Restaurant', RestaurantSchema);
module.exports = RestaurantModel;
