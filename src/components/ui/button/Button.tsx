"use client";

import styles from "./Button.module.scss";

type ButtonProps = {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "outline";
};

const variants = {
  primary: styles.primary,
  outline: styles.outline,
};

function Button({
  children,
  onClick,
  disabled,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`text-lead ${styles.button} ${variants[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
