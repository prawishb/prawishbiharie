import type { ReactNode } from "react";

type Props = {
  variant?: "primary" | "secondary";
  children?: ReactNode;
};

const Status = ({ variant = "primary", children }: Props) => {
  const classes = {
    primary:
      "bg-amber-200 text-amber-900 rounded-md px-4 py-2 w-full text-center",
    secondary:
      "bg-rose-200 text-rose-900 rounded-md px-4 py-2 w-full text-center",
  };

  return <div className={classes[variant]}>{children}</div>;
};

export default Status;
