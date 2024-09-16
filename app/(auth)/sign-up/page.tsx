import AuthForm from "@/components/AuthForm";
import React from "react";

async function SignUp() {
  return (
    <section className="size-full flex-center max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
}

export default SignUp;
