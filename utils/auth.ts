export const getSession = (): object | null => {
  const jwt = localStorage.getItem("auth-token");
  if (jwt) {
    const decoded = Buffer.from(jwt?.split(".")[1], "base64").toString();
    if (decoded) {
      return JSON.parse(decoded);
    }
  }
  return null;
};
