import { FunctionComponent, ReactNode } from "react";

const Card: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="p-3 my-3 shadow-lg hover:shadow-md border rounded">
      {children}
    </div>
  );
};

export default Card;
