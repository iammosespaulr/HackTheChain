// user.js
var mongoose = require('mongoose');
// Setup schema
var userScheme = mongoose.Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	account_id: {
		type: String,
		required: true
	},
	private_key: {
		type: String,
		required: true
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});
// Export User model
var User = (module.exports = mongoose.model('user', userScheme));
module.exports.get = function(callback, limit) {
	User.find(callback).limit(limit);
};
