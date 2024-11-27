import { Controller, useFormContext } from "react-hook-form";
import { FunctionComponent, ReactNode } from "react";
import { CustomSelect } from "../custom-input";

type Props = {
  label: string;
  name: string;
  children: ReactNode;
};

const RHFSelect: FunctionComponent<Props> = ({ label, name, children }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const { onChange, name, value } = field;
        const { error, invalid } = fieldState;
        return (
          <CustomSelect
            label={label}
            name={name}
            onChange={onChange}
            value={value}
            error={invalid}
            helperText={error?.message}
          >
            {children}
          </CustomSelect>
        );
      }}
    />
  );
};

export default RHFSelect;
