const express = require('express');
const {register, login, getLoggedInUser} = require('../Auth/auth.cotrolar');
const middleware  = require('../MIddleware/auth');

const app = express();
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/getuser', middleware, getLoggedInUser)

module.exports = router;