import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const SectionTitle = ({ children }: Props) => {
  return (
    <h3 className="text-center text-3xl font-semibold text-neutral-200 mb-4">
      {children}
    </h3>
  );
};

export default SectionTitle;
