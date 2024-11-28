"use client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FunctionComponent, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const DatePickerProvider: FunctionComponent<Props> = ({ children }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
  );
};

export default DatePickerProvider;
