"use client";
import { loginFormSchema } from "@/app/validationSchemas";
import React from "react";
import { z, ZodError } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Input from "@/app/components/form/input/Input";
import Button from "@/app/components/ui/button/Button";

type FormData = z.infer<typeof loginFormSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(loginFormSchema)
  });

  const onSubmit = async (data: any) => {
    try {
      // Perform any async validation logic here
      console.log("Form data submitted:", data);
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle Zod validation error
        console.error(error.errors);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          variant="simple"
          type="text"
          placeholder="Name"
          {...register("name")}
        />
        {errors.name && <p>{errors.name?.message}</p>}

        {/* <Input
          variant="simple"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && <p>{errors.email?.message}</p>} */}

        <Button variant="primary" type="submit" title="Submit" />
      </form>
    </div>
  );
};

export default Form;
