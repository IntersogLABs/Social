define(function(require, exports, module) {
	var Backbone = require('backbone')
	var UserModel = require("./user-model")

	var UsersCollection = Backbone.Collection.extend({
		model: UserModel,
		url: config.apiUrl + "user"
	})

	module.exports = UsersCollection
})