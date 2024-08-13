const { z } = require('zod');

// Creating a schema for the message form
const messageSchema = z.object({
  username: z
    .string({ required_error: "Name is required" }) // Corrected "require" to "required"
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" }),
  
  email: z
    .string({ required_error: "Email is required" }) // Corrected "require" to "required"
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" })
    .refine(value => /^[a-z]/.test(value) && /\d/.test(value), { message: "Email must contain both letters and numbers" }),
  
  phone: z
    .string({ required_error: "Phone number is required" }) // Corrected "require" to "required"
    .trim()
    .min(10, { message: "Phone number must be at least 10 characters" })
    .max(20, { message: "Phone number must not be more than 20 characters" }),
  
  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must not be more than 1000 characters" })
});

module.exports = messageSchema;
