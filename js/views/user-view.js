define(function(require, exports, module) {
	var Backbone = require('backbone')
	var Handlebars = require('handlebars')

	var template = require('text!templates/user-view.hbs')

	var UserView = Backbone.View.extend({
		container: '#content',
		template: Handlebars.compile(template),

		initialize: function(options){
			this.model = options.model
			this.$container = $(this.container)
		},

		render: function() {
			this.$el.html(this.template(this.model.attributes))
			this.$container.html(this.$el)
			return this;
		}
	})

	module.exports = UserView
})