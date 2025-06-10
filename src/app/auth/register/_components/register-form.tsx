"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// import useRegister from "../_hooks/register-hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import {
  LoginSchema,
  LoginInputs,
  RegisterInputs,
  RegisterSchema,
} from "@/lib/schemes/auth-schemes";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import useRegister from "../_hooks/register-hook";

export default function RegisterForm() {
  const { isPending, error, register } = useRegister();
  const form = useForm<RegisterInputs>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
    
      email: "",
      password: "",
     
    },
  });

  const onSubmit = async (values: RegisterInputs) => {
    console.log(values);
    console.log(`${process.env.API}/auth/signup`);
    register(values);

    
  };
  return (
    <div className="flex justify-center items-center mt-8">
      <div className=" w-1/2">
        <Form {...form}>
          <form className="space-y-9" onSubmit={form.handleSubmit(onSubmit)}>
        

         

            {/* Email */}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter your email"
                      id="email"
                      className="h-12"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter your password"
                      id="password"
                      className="h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
           

           

            {/* button */}
            <Button
              type="submit"
              className="w-full text-[16px] bg-[#4461F2] rounded-2xl h-12 hover:bg-[#4461F2]"
            >
              Register
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}