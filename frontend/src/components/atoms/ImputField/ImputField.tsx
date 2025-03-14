import React from "react";
import { useTranslation } from "react-i18next";
import "./ImputField.scss";

interface InputFieldProps {
  name: string;
  type: string;
  placeholderKey: string;
  register: any;
  required?: boolean;
  ariaLabel: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  placeholderKey,
  register,
  required = false,
  ariaLabel,
}) => {
  const { t } = useTranslation();

  return (
    <input
      className="input__login-page"
      {...register(name, { required })}
      aria-label={t(ariaLabel)}
      aria-required={required}
      type={type}
      placeholder={t(placeholderKey)}
    />
  );
};

export default InputField;