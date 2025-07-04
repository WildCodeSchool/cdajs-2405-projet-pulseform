import { EyeOffIcon, EyeOnIcon } from "@utils/icon-list/iconList";
import { useState } from "react";
import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { useTranslation } from "react-i18next";
import "./InputField.scss";

interface InputFieldProps<T extends FieldValues> {
  name: Path<T>;
  type: string;
  placeholderKey: string;
  register: UseFormRegister<T>;
  required?: boolean;
  ariaLabel: string;
  defaultValue?: string;
}

const InputField = <T extends object>({
  name,
  type,
  placeholderKey,
  register,
  required = false,
  ariaLabel,
  defaultValue = "",
}: InputFieldProps<T>) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="input-field-wrapper">
      <input
        className="input__login-page"
        type={inputType}
        placeholder={t(placeholderKey)}
        aria-label={t(ariaLabel)}
        aria-required={required}
        defaultValue={defaultValue}
        {...register(name, { required })}
      />
      {isPassword && (
        <button
          type="button"
          className={`input-field-wrapper__toggle ${showPassword ? "bounce" : ""}`}
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? t("HIDE_PASSWORD") : t("SHOW_PASSWORD")}
        >
          {showPassword ? <EyeOffIcon /> : <EyeOnIcon />}
        </button>
      )}
    </div>
  );
};

export default InputField;
