const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
User = require('../models/user');
const express = require('express');
const router = express.Router();

exports.auth = async function(req, res) {
	// First Validate The HTTP Request
	const { error } = validate(req.body.data);

	if (error) {
		return res.send(error.details[0].message);
	}

	//  Now find the user by their email address
	let user = await User.findOne({ email: req.body.data.email });
	if (!user) {
		console.log('Incorrect Email or Password')
		return res.send('Incorrect email or password.');
	}
	console.log(user);
	// Then validate the Credentials in MongoDB match
	// those provided in the request
	const validPassword = await bcrypt.compare(req.body.data.password, user.password).then(function(result) {
		if (!result) {
			res.json({
				message: 'error',
				data: result
			});
		} else {
			res.json({
				message: 'success',
				data: true
			});
			return res.send('Authentication Successful!');
		}
	});
};

function validate(req) {
	const schema = {
		email: Joi.string().min(5).max(255).required().email(),
		password: Joi.string().min(5).max(255).required()
	};

	return Joi.validate(req, schema);
}
