const express = require("express");
const router = express.Router();
const contactSchema = require('../Validator/contact-validator')
const validate  = require('../middlewares/validate-middleware');
const contactForm = require('../Controller/contact-controller')
router.route('/contact').post(validate(contactSchema),contactForm);

module.exports = router;