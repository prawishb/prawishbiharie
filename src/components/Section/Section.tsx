import SectionTitle from "./SectionTitle";
import SectionDescription from "./SectionDescription";
import SectionContent from "./SectionContent";
import { type ReactNode } from "react";

type Props = {
  id?: string;
  className?: string;
  children?: ReactNode;
};

const Section = ({ id = "", className = "", children }: Props) => {
  return (
    <section id={id} className="max-w-3xl mx-auto py-16 h-full w-full">
      {children}
    </section>
  );
};

Section.Title = SectionTitle;
Section.Description = SectionDescription;
Section.Content = SectionContent;

export default Section;
