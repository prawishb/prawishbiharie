import type { ReactNode } from "react";

import ProjectImage from "./ProjectImage";
import ProjectName from "./ProjectName";
import ProjectDescription from "./ProjectDescription";
import ProjectContent from "./ProjectContent";
import ProjectTag from "./ProjectTag";

type Props = {
  children?: ReactNode;
};

const Project = ({ children }: Props) => {
  return (
    <a href="#">
      <div className="flex flex-col gap-4 rounded-md">{children}</div>
    </a>
  );
};

Project.Image = ProjectImage;
Project.Name = ProjectName;
Project.Description = ProjectDescription;
Project.Content = ProjectContent;
Project.Tag = ProjectTag;

export default Project;
