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
  return <div className="flex flex-col gap-4">{children}</div>;
};

Project.Image = ProjectImage;
Project.Name = ProjectName;
Project.Description = ProjectDescription;
Project.Content = ProjectContent;
Project.Tag = ProjectTag;

export default Project;
