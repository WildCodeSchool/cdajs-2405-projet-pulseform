import React from "react";
import classNames from "classnames";
import type { LoginImageProps } from "./LoginImage.type";
import loginImage from "../../../assets/icons/loging-page-img.svg";
import "./LoginImage.scss";

const LoginImage: React.FC<LoginImageProps> = ({ size = "desktop" }) => {
  const LoginImageClassName = classNames("login-image", {
    "login-image--mobile": size === "mobile",
    "login-image--desktop": size === "desktop",
  });

  return (
    <div className={LoginImageClassName}>
      <img
        className="login-image__img"
        src={loginImage}
        alt="Login Illustration"
      />
    </div>
  );
};

export default LoginImage;
