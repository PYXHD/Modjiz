"use client";

type ButtonProps = {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "outline";
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
      className={`text-lead button ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
