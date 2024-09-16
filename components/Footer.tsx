import { logout } from "@/lib/actions/user.action";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function Footer({ user, type = "Desktop" }: FooterProps) {
  const router = useRouter();
  const logoutHandler = async () => {
    const response = await logout();
    if (response) {
      router.push("/sign-in");
    }
  };
  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">{user?.name?.[0]}</p>
      </div>
      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate text-gray-700 font-semibold">
          {user?.name}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600 ">
          {user?.email}
        </p>
      </div>
      <div className="footer_image" onClick={logoutHandler}>
        <Image src="icons/logout.svg" alt="logout" fill />
      </div>
    </footer>
  );
}

export default Footer;
