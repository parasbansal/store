const mongoose = require('mongoose');

// Product Schema
const ProductSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	price: {
		type: Number,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	},
	created_at: {
		type: Date,
		required: true,
		default: Date.now
	}
});

const Product = module.exports = mongoose.model('Product', ProductSchema);

// Model Functions
// Get All
module.exports.getAll = function (callback) {
	Product.find({}).exec(callback);
}

// Get By Id
module.exports.getById = function (id, callback) {
	Product.findById(id).exec(callback);
}

// Add
module.exports.add = function (newItem, callback) {
	newItem.save(callback);
}

// Edit
module.exports.edit = function (id, newItem, callback) {
	Product.findByIdAndUpdate(id, newItem, callback);
}

// Delete
module.exports.delete = function (id, callback) {
	Product.findByIdAndRemove(id).exec(callback);
}