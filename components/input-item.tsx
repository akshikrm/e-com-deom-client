import {
  FunctionComponent,
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
} from "react";

type InputItemProps = {
  label: string;
  id: string | "";
  name: string;
  defaultValue?: string | FormDataEntryValue;
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
  ...props
}) => (
  <div>
    <InputLabel id={id} labelAction={labelAction} label={label} />
    <div className="mt-2">
      <input
        id={id}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        {...props}
      />
    </div>
  </div>
);

export default InputItem;
