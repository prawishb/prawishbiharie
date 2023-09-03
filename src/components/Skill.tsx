import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Skill = ({ children }: Props) => {
  return (
    <div className="bg-stone-800 text-stone-200 border-stone-600 text-sm px-4 py-2 rounded-md border">
      {children}
    </div>
  );
};

export default Skill;
