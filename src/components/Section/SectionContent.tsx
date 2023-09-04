import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const SectionContent = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default SectionContent;
