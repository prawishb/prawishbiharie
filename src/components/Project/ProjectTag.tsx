import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};
const ProjectTag = ({ children }: Props) => {
  return (
    <li className="bg-amber-200 text-amber-700 px-2 py-1 text-[.625rem] uppercase font-bold rounded-full w-fit">
      {children}
    </li>
  );
};

export default ProjectTag;
