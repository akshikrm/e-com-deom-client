import { ReactNode } from "react";

export default async function Products({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="container mx-auto">{children}</div>
    </>
  );
}
