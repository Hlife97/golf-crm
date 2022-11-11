const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/ContactController');

router.get('/', ContactController.index);
router.post('/', ContactController.store);
router.get('/:id', ContactController.show);
router.put('/:id', ContactController.update);
router.delete('/:id', ContactController.remove);

module.exports = router;