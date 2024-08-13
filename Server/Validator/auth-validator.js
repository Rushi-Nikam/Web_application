const {z}= require('zod');
//creating an object schema
const signupSchema = z.object({
 username:z
 .string({required_error:"Name is require"})
 .trim()
 .min(3,{message:"Name must be at least of 3 characters"})
 .max(255,{message:"Name must not be more than 255 characters"}),
 email:z
 .string({required_error:"Email is require"})
 .trim()
 .email({message:"Invalid email address"})
 .min(3,{message:"Email must be at least of 3 characters"})
 .max(255,{message:"Name must not be more than 255 characters"})
 .refine(value=>/^[a-z]/.test(value)&& /\d/.test(value),{message:"Email must contain both letters and numbers"}),
 phone:z
 .string({required_error:"phone number is require"})
 .trim()
 .min(10,{message:" phone number must be at least of 10 characters"})
 .max(20,{message:"phone number must not be more than 20 characters"}),
 password:z
 .string({required_error:"password is require"})
 .trim()
 .min(7,{message:"password must be at least of 7 characters"})
 .max(124,{message:"password must not be more than 1024 characters"})
 .refine(value=>/^[A-Z]/.test(value),{message:"Password must start with an uppercase letter"}),
})

module.exports = signupSchema;
