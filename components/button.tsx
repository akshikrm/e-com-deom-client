import { FunctionComponent, ReactNode } from "react";

type ButtonVariants = "primary" | "danger";

const Button: FunctionComponent<{
  children: ReactNode;
  variant?: ButtonVariants;
}> = ({ children, variant = "primary" }) => {
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

  return <button className={className}>{children}</button>;
};

export default Button;
