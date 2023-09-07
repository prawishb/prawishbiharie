import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};
const ProjectImage = ({ children }: Props) => {
  return (
    <div className="bg-neutral-300 w-full aspect-video rounded-md">
      {children}
    </div>
  );
};

export default ProjectImage;
