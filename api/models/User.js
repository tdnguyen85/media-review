/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  schema: true,

  attributes: {
    username: {
      type: 'string',
      required: true
    },



    userId: 'INT',
    firstName: 'string',
    lastName: 'string',
    age: 'INT',
    gender: 'string',
    location: 'string',

    // Define a custom instance method
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  }

};
