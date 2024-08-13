const express = require("express");
const router = express.Router();
const authControllers = require("../Controller/auth-controller");
const validate  = require('../middlewares/validate-middleware');
const signupSchema = require("../Validator/auth-validator");
router.route("/").get(authControllers.home);
router
  .route("/register")     
  .post(validate(signupSchema), authControllers.register);
router.route("/login").post(validate(signupSchema) , authControllers.login);

module.exports = router;