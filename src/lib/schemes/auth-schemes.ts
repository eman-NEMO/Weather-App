import {z} from "zod"

// login schema 
export const LoginSchema = z.object({
    email:z.string({required_error:"Email is required"})
    .email("please Enter valid Email"),
    password:z.string({required_error:"Password is required"})
    
})


export type LoginInputs = z.infer<typeof LoginSchema>


// password validation
const passwordValidation = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  );
  // password schema
export const RegisterSchema = z.object({
  
  
   
    email:z.string({required_error:"Email is required"})
    .email("please Enter valid Email"),

    password:z.string({required_error:"Password is required"})
    .min(1,"password is required")
    .max(20, "Password is too long")
 


})
// refine is object have all data to check specific condition

// i take it in notes 
export type RegisterInputs=z.infer<typeof RegisterSchema>