import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const ProjectDescription = ({ children }: Props) => {
  return <p className="text-sm line-clamp-2">{children}</p>;
};

export default ProjectDescription;
