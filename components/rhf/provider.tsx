/* eslint-disable  @typescript-eslint/no-explicit-any */
import { FormProvider, UseFormReturn } from "react-hook-form";
import { FunctionComponent, ReactNode } from "react";

type Props = {
  methods: UseFormReturn<any, any, undefined>;
  onSubmit: (inputData: any) => Promise<void>;
  children: ReactNode;
};

const RHFProvider: FunctionComponent<Props> = ({
  methods,
  onSubmit,
  children,
}) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default RHFProvider;
