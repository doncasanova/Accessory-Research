const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const encryptLib = require('../modules/encryption');
const Customer = require('../models/customer');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Customer.findById(id).then((result) => {
    // Handle Errors
    const user = result;

    if (!user) {
      // user not found
      done(null, false, { message: 'Incorrect credentials.' });
    } else {
      // user found
      done(null, user);
    }
  }).catch((err) => {
    console.log('query err ', err);
    done(err);
  });
});

// Does actual work of logging in
passport.use('local', new LocalStrategy({
  passReqToCallback: true,
  usernameField: 'email',
}, ((req, email, password, done) => {

  // console.log(email, password)

    Customer.find({ email })
      .then((result) => {
        const user = result && result[0];
       
        if (user && encryptLib.comparePassword(password, user.password)) {
          // all good! Passwords match!
         console.log("password worked all is well")

         
          done(null, user);
        } else if (user) {
          // not good! Passwords don't match!
          done(null, false, { message: 'Incorrect credentials.' });
        } else {
          // not good! No user with that name
          done(null, false);
        }
      }).catch((err) => {
        console.log('error', err);
        done(null, {});
      });
  })));

module.exports = passport;
