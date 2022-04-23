import ProjectInput from "./components/project-input";
import ProjectList from "./components/project-list";
import { ProjectType } from "./enums/project-type.enum";

const projectInputComponent = new ProjectInput();
const activeProjectsComponent = new ProjectList(ProjectType.Active);
const finishedProjectsComponent = new ProjectList(ProjectType.Finished);
