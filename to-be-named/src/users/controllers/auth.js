const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
User = require('../models/user');
const express = require('express');
const router = express.Router();

exports.auth = async function(req, res) {
	// First Validate The HTTP Request
	const { error } = validate(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}

	//  Now find the user by their email address
	let user = await User.findOne({ email: req.body.email });
	if (!user) {
		return res.status(400).send('Incorrect email or password.');
	}
	// Then validate the Credentials in MongoDB match
	// those provided in the request
	const validPassword = await bcrypt.compare(req.body.password, user.password).then(function(result) {
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
