define(function(require, exports, module) {
	var Backbone = require('backbone')
	var Handlebars = require('handlebars')

	var template = require('text!templates/users-list-item.hbs')

	var UsersListView = Backbone.View.extend({
		container: '#sidebar',
		className: "list-group users-list",
		template: Handlebars.compile(template),

		initialize: function(options){
			this.collection = options.collection
			this.$container = $(this.container)
			this.activeUser = options.activeUser
		},

		render: function() {
			var html = ""
			this.collection.models.forEach(function(model){
				if (model.attributes._id == this.activeUser) {
					model.set({active: true})
				}
				html += this.template(model.attributes)
			}.bind(this))

			this.$el.html(html)
			this.$container.html(this.$el)
			return this;
		}
	})

	module.exports = UsersListView
})