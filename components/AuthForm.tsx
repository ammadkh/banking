"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { signIn, signUp } from "@/lib/actions/user.action";
import { useRouter } from "next/navigation";

function AuthForm({ type }: { type: string }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const formScehma = authFormSchema(type);
  const router = useRouter();

  const form = useForm<z.infer<typeof formScehma>>({
    resolver: zodResolver(formScehma),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formScehma>) => {
    try {
      setLoading(true);
      if (type === "sign-in") {
        const response = await signIn({
          email: values.email,
          password: values.password,
        });
        console.log(response, "ddd");
        if (response) router.push("/");
      } else {
        const newUser = await signUp(values);
        setUser(newUser);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer items-center gap-1 flex">
          <Image src="/icons/logo.svg" alt="logo" width={34} height={34} />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user
              ? "Link your account to get started"
              : "Please enter your details"}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">plaid link</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      label="First Name"
                      placeholder="Enter your First Name"
                      type="text"
                    />
                    <CustomInput
                      control={form.control}
                      name="lastName"
                      label="Last Name"
                      placeholder="Enter your Last Name"
                      type="text"
                    />
                  </div>
                  <CustomInput
                    control={form.control}
                    name="address1"
                    label="Address"
                    placeholder="Enter your Address"
                    type="text"
                  />
                  <CustomInput
                    control={form.control}
                    name="city"
                    label="City"
                    placeholder="Enter your city"
                    type="text"
                  />
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="state"
                      label="State"
                      placeholder="Ex: NY"
                      type="text"
                    />
                    <CustomInput
                      control={form.control}
                      name="postalCode"
                      label="Postal Code"
                      placeholder="Ex: 110111"
                      type="text"
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="dateOfBirth"
                      label="Date of Birth"
                      placeholder="YYYY-MM-DD"
                      type="text"
                    />
                    <CustomInput
                      control={form.control}
                      name="ssn"
                      label="SSN"
                      placeholder="Example: 1234"
                      type="text"
                    />
                  </div>
                </>
              )}
              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email"
                type="text"
              />
              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 size={20} className="animate-spin mr-2" />
                      Loading
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              className="form-link"
            >
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
}

export default AuthForm;
