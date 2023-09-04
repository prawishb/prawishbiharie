import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const SectionDescription = ({ children }: Props) => {
  return <p className="text-center text-sm mb-8">{children}</p>;
};

export default SectionDescription;
