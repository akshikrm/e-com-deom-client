import { Controller, useFormContext } from "react-hook-form";
import { FunctionComponent, HTMLInputTypeAttribute } from "react";
import CustomInput from "../custom-input";

type Props = {
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute;
};

const RHFTextField: FunctionComponent<Props> = ({
  label,
  name,
  type = "text",
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const { onChange, name, value } = field;
        const { error, invalid } = fieldState;
        return (
          <CustomInput
            label={label}
            name={name}
            onChange={onChange}
            value={value}
            type={type}
            error={invalid}
            helperText={error?.message}
          />
        );
      }}
    />
  );
};

export default RHFTextField;
