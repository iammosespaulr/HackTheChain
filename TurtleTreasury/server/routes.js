// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function(req, res) {
	res.json({
		status: 'API Its Working',
		message: 'Welcome to Turtle Treasury'
	});
});
// Import user controller
var userController = require('./controllers/controller');

var authController = require('./controllers/auth');

// User routes
router.route('/users').get(userController.index).post(userController.new);

router
	.route('/users/:user_id')
	.get(userController.view)
	.patch(userController.update)
	.put(userController.update)
	.delete(userController.delete);

router
	.route('/users/new')
	.post(userController.new)

router.route('/auth').post(authController.auth);
// Export API routes
module.exports = router;
