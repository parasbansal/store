const express = require('express');
const router = express.Router();

const Product = require('../models/product');

// Get All
router.get('/', (req, res, next) => {
	Product.getAll((err, data) => {
		if (err) {
			res.json({
				status: false,
				message: 'There was some error. ' + err
			});
		} else {
			res.json({
				status: true,
				data: data
			});
		}
	});
});

// Add
router.post('/', (req, res, next) => {
	let newItem = new Product({
		name: req.body.name,
		description: req.body.description ? req.body.description : null,
		price: req.body.price,
		quantity: req.body.quantity
	});

	Product.add(newItem, (err, data) => {
		if (err) {
			res.json({
				status: false,
				message: 'There was some error. ' + err
			});
		} else {
			res.json({
				status: true,
				data: data
			});
		}
	});
});

// Edit
router.put('/:id', (req, res, next) => {
	let newItem = {
		name: req.body.name,
		description: req.body.description ? req.body.description : null,
		price: req.body.price,
		quantity: req.body.quantity
	};

	console.log(newItem);

	Product.edit(req.params.id, newItem, (err, data) => {
		if (err) {
			res.json({
				status: false,
				message: 'There was some error. ' + err
			});
		} else {
			res.json({
				status: true,
				data: data
			});
		}
	});
});

// Delete
router.delete('/:id', (req, res, next) => {
	Product.delete(req.params.id, (err, data) => {
		if (err) {
			res.json({
				status: false,
				message: 'There was some error. ' + err
			});
		} else {
			res.json({
				status: true,
				data: data
			});
		}
	});
});

// Get By Id
router.get('/:id', (req, res, next) => {
	Product.getById((err, data) => {
		if (err) {
			res.json({
				status: false,
				message: 'There was some error. ' + err
			});
		} else {
			res.json({
				status: true,
				data: data
			});
		}
	});
});

module.exports = router