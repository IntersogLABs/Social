define(function(require, exports, module) {
	var Backbone = require('backbone')

	var UserModel = Backbone.Model.extend({
		urlRoot: config.apiUrl + "user"
	})

	module.exports = UserModel
})