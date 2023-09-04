import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Skill = ({ children }: Props) => {
  return (
    <div className="bg-neutral-800 text-neutral-200 border-neutral-600 text-sm px-4 py-2 rounded-md border">
      {children}
    </div>
  );
};

export default Skill;
