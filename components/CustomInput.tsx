import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldPath } from "react-hook-form";
import { authFormSchema } from "@/lib/utils";
import { z } from "zod";
const formScehma = authFormSchema("sign-up");

interface CustomInput {
  control: Control<z.infer<typeof formScehma>>;
  name: FieldPath<z.infer<typeof formScehma>>;
  label: string;
  placeholder: string;
  type: string;
}

export default function CustomInput({
  control,
  name,
  label,
  placeholder,
  type,
}: CustomInput) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={type}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2"></FormMessage>
          </div>
        </div>
      )}
    />
  );
}
