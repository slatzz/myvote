const router = require('express').Router();
const passport = require('passport');
const passportSetup = require('../config/passport-setup');

// Auth Login
router.get('/login', (req, res) => {
  res.render('login');
});
// Auth Logout
router.get('/logout', (req, res) => {
  // Handle with passport
  res.send('Logging out from Google');
});
// Auth with Google
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

// Callback for Google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('You reached callback URI');
});

//////////////////            ROUTES TO PASSPORT/PAGES            ///////////
/////////////////////////////////////////////////////////////////////////////

///////////////         routes for authentication            ///////////////
module.exports = router;
