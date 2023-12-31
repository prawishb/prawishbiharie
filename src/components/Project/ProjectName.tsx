import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const ProjectName = ({ children }: Props) => {
  return <h4 className="text-neutral-800 text-xl font-semibold">{children}</h4>;
};

export default ProjectName;
