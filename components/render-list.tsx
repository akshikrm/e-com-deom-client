/* eslint-disable  @typescript-eslint/no-explicit-any */
import { FunctionComponent, ReactNode } from "react";

type Props = {
  list: unknown[];
  render: (item: any, i?: number) => ReactNode;
};
const RenderList: FunctionComponent<Props> = ({ list = [], render }) => {
  if (list.length > 0) {
    return list.map(render);
  }
  return null;
};

export default RenderList;
