export const getValueFromForm = (formData?: FormData) => {
  return (key: string): string => {
    if (formData) {
      return formData.get(key) as string;
    }
    return "";
  };
};
