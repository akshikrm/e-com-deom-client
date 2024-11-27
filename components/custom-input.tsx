/* eslint-disable  @typescript-eslint/no-explicit-any */
import {
  FunctionComponent,
  HTMLInputTypeAttribute,
  ReactNode,
  useMemo,
} from "react";

type InputProps = {
  label: string;
  value: string;
  name: string;
  helperText?: string;
  error?: boolean;
  onChange: (...event: any[]) => void;
  type?: HTMLInputTypeAttribute;
};

const CustomInput: FunctionComponent<InputProps> = ({
  label,
  value,
  name,
  helperText,
  type = "text",
  error = false,
  onChange,
}) => {
  const inputClassName = useMemo(() => {
    const temp =
      "block w-full rounded-md border-2 p-1.5 focus:border-indigo-500 focus:outline-none";
    if (error) {
      return `${temp} border-rose-500`;
    }
    return temp;
  }, [error]);

  return (
    <>
      <label
        htmlFor={name}
        className="block text-sm/6 font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        value={value}
        className={inputClassName}
        type={type}
        onChange={onChange}
      />

      <HelperText message={helperText} error={error} />
    </>
  );
};

export const CustomSelect: FunctionComponent<{
  children: ReactNode;
  label: string;
  value?: string;
  name: string;
  helperText?: string;
  error?: boolean;
  onChange?: (...event: any[]) => void;
}> = ({
  label,
  value,
  name,
  helperText,
  error = false,
  children,
  onChange,
}) => {
  const inputClassName = useMemo(() => {
    const temp =
      "block w-full rounded-md border-2 p-1.5 focus:border-indigo-500 focus:outline-none";
    if (error) {
      return `${temp} border-rose-500`;
    }
    return temp;
  }, [error]);

  return (
    <>
      <label
        htmlFor={name}
        className="block text-sm/6 font-medium text-gray-900"
      >
        {label}
      </label>
      <select
        value={value}
        name={name}
        id={name}
        className={inputClassName}
        onChange={onChange}
      >
        {children}
      </select>

      <HelperText message={helperText} error={error} />
    </>
  );
};

type HelperTextProps = {
  message?: string;
  error?: boolean;
};

const HelperText: FunctionComponent<HelperTextProps> = ({ message, error }) => {
  const className = useMemo(() => {
    const temp = "text-xs mt-1";
    if (!error) {
      return temp;
    }
    return `${temp} text-rose-500`;
  }, [error]);

  if (!message) return null;
  return <p className={className}>{message}</p>;
};

export default CustomInput;
