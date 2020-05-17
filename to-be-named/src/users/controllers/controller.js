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
	return new Promise((resolve, reject) => {
		User.findOne({ email: req.body.email }).exec((err, doc) => {
			if (err) return PromiseRejectionEvent(err);
			if (doc) return PromiseRejectionEvent(new Error('That user already exists!'));
			var newUser = new User({
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				phone: req.body.phone,
				email: req.body.email,
				password: req.body.password,
				account_id: req.body.account_id,
				private_key: req.body.private_key
			});
			const salt = bcrypt.genSalt(10);
			newUser.password = bcrypt.hash(newUser.password, salt);
			newUser.account_id = bcrypt.hash(newUser.account_id, salt);
			newUser.private_key = bcrypt.hash(newUser.private_key, salt);
			// save the user and check for errors
			newUser.save(function(err) {
				// Check for validation error
				if (err) res.json(err);
				else
					res.json({
						message: 'New user created!',
						data: newUser
					});
			});
		});
	});
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
