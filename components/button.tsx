import { FunctionComponent, MouseEvent, ReactNode } from "react";

type ButtonVariants = "primary" | "danger";

type Props = {
  children: ReactNode;
  variant?: ButtonVariants;
  onClick?: (e: MouseEvent) => void;
  fullWidth?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
};

const Button: FunctionComponent<Props> = ({
  children,
  variant = "primary",
  onClick,
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

  if (fullWidth) {
    className = `${className} w-full`;
  }

  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
};

export default Button;
