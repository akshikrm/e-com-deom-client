import {
  FunctionComponent,
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
} from "react";

type InputItemProps = {
  label: string;
  id: string | "";
  name: string;
  errors?: string;
  defaultValue?: null | FormDataEntryValue;
  required?: boolean;
  labelAction?: React.ReactNode;
  type?: HTMLInputTypeAttribute;
  autoComplete?: HTMLInputAutoCompleteAttribute;
};

type InputLabelProps = {
  label: string;
  id: string;
  labelAction?: React.ReactNode;
};

const InputLabel: FunctionComponent<InputLabelProps> = ({
  labelAction,
  label,
  id,
}) => {
  if (labelAction) {
    return (
      <div className="flex items-center justify-between">
        <label
          htmlFor="password"
          className="block text-sm/6 font-medium text-gray-900"
        >
          {label}
        </label>
        <div className="text-sm">{labelAction}</div>
      </div>
    );
  }
  return (
    <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
      {label}
    </label>
  );
};

const InputItem: FunctionComponent<InputItemProps> = ({
  label,
  id,
  labelAction,
  errors,
  ...props
}) => {
  let inputClassName =
    "block w-full rounded-md border-2 p-1.5 focus:border-indigo-500 focus:outline-none";

  if (errors) {
    inputClassName = `${inputClassName} border-rose-500`;
  } else {
    inputClassName = `${inputClassName} border-gray-400`;
  }

  return (
    <div>
      <InputLabel id={id} labelAction={labelAction} label={label} />
      <div className="mt-2">
        <input id={id} className={inputClassName} {...props} />
      </div>
      {errors ? (
        <p className="capitalize text-sm text-rose-500">{errors}</p>
      ) : null}
    </div>
  );
};

export default InputItem;
