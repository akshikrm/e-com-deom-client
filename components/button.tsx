import { FunctionComponent, MouseEvent, ReactNode } from "react";

type ButtonVariants = "primary" | "danger";

type Props = {
  children: ReactNode;
  variant?: ButtonVariants;
  onClick?: (e: MouseEvent) => void;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
};

const Button: FunctionComponent<Props> = ({
  children,
  variant = "primary",
  onClick,
  disabled,
  loading,
  type = "button",
  fullWidth,
}) => {
  let className =
    "capitalize shadow-lg text-white py-1 px-4 rounded-md text-sm";

  switch (variant) {
    case "danger": {
      className = `${className} shadow-red-500/50 bg-red-500 hover:bg-red-600`;
      break;
    }

    default: {
      className = `${className} shadow-indigo-500/50 bg-indigo-500 hover:bg-indigo-600`;
      break;
    }
  }

  if (disabled || loading) {
    className = `${className} bg-slate-500 shadow-slate-500/50 text-slate-400 hover:bg-slate-500 cursor-not-allowed`;
  }
  if (loading) {
    className = `${className} flex`;
  }

  if (fullWidth) {
    className = `${className} w-full`;
  }

  return (
    <button
      onClick={onClick}
      className={className}
      type={type}
      disabled={disabled || loading}
    >
      {loading ? (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
