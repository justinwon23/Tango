


const mongoose = require('mongoose');
 
const ListingSchema = new mongoose.Schema({
    name:{ 
        type: String,
        required: [true, "name is required"],
        minlength: [3, 'name must be 2 characters long']

    },

    address: {
        type: String,
        required: [true, "address is required"]
    },

    email: {
        type: String,
        required: [true, "email is required"]
    },

    type: {
        type: String
    },

    compensation: {
        type: Number
    },

    frequency: {
        type: String
    },

    description: {
        type: String
    },

    lat:{
        type: String
    },

    lng: {
        type: String
    }


},{timestamps:true});
 
const Listing = mongoose.model('Pirate', ListingSchema);
 
module.exports = Listing;
