import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const ProjectDescription = ({ children }: Props) => {
  return <p>{children}</p>;
};

export default ProjectDescription;
