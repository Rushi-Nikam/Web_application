const User = require("../Models/user_Model");

const home = async (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to our home page" });
  } catch (error) {
    console.log(error);
  }
};
// *-------------------
// Registration Logic
// *-------------------
const register = async (req, res) => {
  try {
    // const data = req.body;
    console.log(req?.body);
    const { username, email, phone, password } = req?.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    // res.status(201).json({ message: "User registered successfully" });
    res
      .status(201)
      .json({
        msg: "registration successfull",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login Logic

const login = async(req,res)=>{
  try {
 const {email,password}= req?.body;

 const userExits = await User.findOne({email});
 console.log(userExits)

 if(!userExits){
  return res.status(400).json({message:"Invalid creditials"});

 }
   //  const userpassword = await bcrypt.compare(password,userExits.password);

    const userpassword = await comparepassword(password);
 
 if(userpassword){
  res
  .status(200)
  .json({
    msg: "Login Successful",
    token: await userExits.generateToken(),
    userId: userExits._id.toString(), 
});  
}else{
   return res.status(401).json({message:"Invalid email and Password"});


 }

    
  } catch (error) {
    res.status(500).json({ message: "Internal server error" })
  }
}


module.exports = { home, register, login };
