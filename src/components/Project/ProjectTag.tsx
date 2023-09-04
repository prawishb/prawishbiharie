import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};
const ProjectTag = ({ children }: Props) => {
  return (
    <li className="bg-amber-300 text-amber-900 px-2 py-px text-sm rounded-md w-fit">
      {children}
    </li>
  );
};

export default ProjectTag;
