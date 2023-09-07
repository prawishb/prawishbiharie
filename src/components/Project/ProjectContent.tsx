import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const ProjectContent = ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-2 items-center text-center">
      {children}
    </div>
  );
};

export default ProjectContent;
