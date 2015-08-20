define(function(require, exports, module) {
  var Backbone = require('backbone')
  var UsersCollection = require('models/users-collection')
  var UserModel = require('models/user-model')
  var UsersListView = require('views/users-list-view')
  var UserView = require('views/user-view')

  var Router = Backbone.Router.extend({
    routes: {
      "": "home",
      "users/:id":"users",
      "users":"users",
      "me":"me"
    },

    home: function() {
      console.log("home")
    },

    users: function(id) {
      var usersCollection = new UsersCollection()
      var usersListView = new UsersListView({
        collection: usersCollection,
        activeUser: id
      })

      usersCollection.fetch().then(function(){
        usersListView.render()
      })

      if (id) {
        var userModel = new UserModel({id: id})
        var userView = new UserView({model: userModel})

        userModel.fetch().then(function(){
          userView.render()
        })
      }
    },

    me: function() {
      console.log("me")
    }

  });

  module.exports = Router
})