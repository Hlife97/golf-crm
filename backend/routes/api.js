const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/ContactController');
const UserController = require('../controllers/UserController');


// User
router.post('/', UserController.register);

router.get('/', ContactController.index);
router.post('/', ContactController.store);
router.get('/:id', ContactController.show);
router.put('/:id', ContactController.update);
router.delete('/:id', ContactController.remove);


module.exports = router;