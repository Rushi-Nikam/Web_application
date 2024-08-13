const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
// user password matching
userSchema.methods.comparepassword=async function(password){
 return  bcrypt.compare(password, this.password);
};
//save secure password with bcrypt
userSchema.pre("save", async function (next) {
  const user = this;
  console.log("this is", user);
  if (!user.isModified("password")) {
    next();
  }
  try {
    
    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, salt);
    user.password = hash_password;
  } catch (error) {
   
    next(error);
  }
});

// json web token
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
        },
    process.env.JWT_SECRET_KEY,
    {
        expiresIn: "30d",
    }
    );
    } catch (error) {
        next(error)
    }
};
//define model or the collection name
const User = new mongoose.model("User", userSchema);

module.exports = User;
