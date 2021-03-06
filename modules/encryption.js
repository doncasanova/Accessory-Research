var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;

var publicAPI = {
  encryptPassword: function(password) {
      var salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
      return bcrypt.hashSync(password, salt);
  },
  comparePassword: function(candidatePassword, storedPassword) {
    //   console.log(candidatePassword, "canidate")
    //   console.log(storedPassword, "stored")
      return bcrypt.compareSync(candidatePassword, storedPassword);
  }
};

module.exports = publicAPI;
