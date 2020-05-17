// controller.js
// Import user model
User = require('../models/user');
const bcrypt = require('bcrypt');
// Handle index actions
exports.index = function(req, res) {
	User.get(function(err, users) {
		if (err) {
			res.json({
				status: 'error',
				message: err
			});
		}
		res.json({
			status: 'success',
			message: 'Users retrieved successfully',
			data: users
		});
	});
};
// Handle create user actions
exports.new = async function(req, res) {
	let check = await User.find({ email: req.body.email });
	if (check[0] != null) {
		return res.status(400).send('That user already exists!');
	} else {
		var user = new User({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			phone: req.body.phone,
			email: req.body.email,
			password: req.body.password,
			account_id: req.body.account_id,
			private_key: req.body.private_key
		});
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(user.password, salt);
		user.account_id = await bcrypt.hash(user.account_id, salt);
		user.private_key = await bcrypt.hash(user.private_key, salt);
		// save the user and check for errors
		user.save(function(err) {
			// Check for validation error
			if (err) res.json(err);
			else
				res.json({
					message: 'New user created!',
					data: user
				});
		});
	}
};
// Handle view user info
exports.view = function(req, res) {
	User.findById(req.params.user_id, function(err, user) {
		if (err) res.send(err);
		res.json({
			message: 'User details loading..',
			data: user
		});
	});
};
// Handle update user info
exports.update = function(req, res) {
	User.findById(req.params.user_id, function(err, user) {
		if (err) res.send(err);
		user.first_name = req.body.first_name;
		user.last_name = req.body.last_name;
		user.email = req.body.email;
		user.phone = req.body.phone;
		user.password = req.body.password;
		user.account_id = req.body.account_id;
		user.private_key = req.body.private_key;
		// save the user and check for errors
		user.save(function(err) {
			if (err) res.json(err);
			res.json({
				message: 'User Info updated',
				data: user
			});
		});
	});
};
// Handle delete user
exports.delete = function(req, res) {
	User.remove(
		{
			_id: req.params.user_id
		},
		function(err, user) {
			if (err) res.send(err);
			res.json({
				status: 'success',
				message: 'User deleted'
			});
		}
	);
};
