type FailedResponse = {
  status: boolean;
  message: string;
  error?: object | null;
};

type RequestFailedError = {
  status: number | undefined;
  failed: (error?: object | null) => FailedResponse;
};
