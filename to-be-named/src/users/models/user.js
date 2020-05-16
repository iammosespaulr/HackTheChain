	const Joi = require('joi');
	const mongoose = require('mongoose');

	const User = mongoose.model('User', new mongoose.Schema({
	    first_name: {
	        type: String,
	        required: true,
	        minlength: 1,
	        maxlength: 50
	    },
	    last_name: {
	        type: String,
	        required: true,
	        minlength: 1,
	        maxlength: 50
	    },
	    phone: {
	        type: String,
	        required: true
	    },
	    email: {
	        type: String,
	        required: true,
	        minlength: 5,
	        maxlength: 255,
	        unique: true
	    },
	    password: {
	        type: String,
	        required: true,
	        minlength: 5,
	        maxlength: 1024
	    }
	}));

	function validateUser(user) {
	    const schema = {
	        first_name: Joi.string().min(1).max(50).required(),
	        last_name: Joi.string().min(1).max(50).required(),
	        phone: Joi.string().required(),
	        email: Joi.string().min(5).max(255).required().email(),
	        password: Joi.string().min(5).max(255).required()
	    };
	    return Joi.validate(user, schema);
	}

	exports.User = User;
	exports.validate = validateUser;