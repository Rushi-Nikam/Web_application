const {z}= require('zod');
//creating an object schema
const signInSchema = z.object({
 email:z
 .string({required_error:"Email is require"})
 .trim()
 .email({message:"Invalid email address"})
 .min(3,{message:"Email must be at least of 3 characters"})
 .max(255,{message:"Name must not be more than 255 characters"})
 .refine(value=>/^[a-z]/.test(value)&& /\d/.test(value),{message:"Email must contain both letters and numbers"}),
 password:z
 .string({required_error:"password is require"})
 .trim()
 .min(7,{message:"password must be at least of 7 characters"})
 .max(124,{message:"password must not be more than 1024 characters"})
 .refine(value=>/^[A-Z]/.test(value),{message:"Password must start with an uppercase letter"}),
 
})

module.exports = signInSchema;
