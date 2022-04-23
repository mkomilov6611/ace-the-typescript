import { ProjectType } from "../enums/project-type.enum";
import { Project } from "../models/project";

export default class ProjectState {
  private static instance: ProjectState;
  private projects: Project[] = [];

  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new ProjectState();

    return this.instance;
  }

  addProject(
    title: string,
    description: string,
    peopleCount: number,
    type: ProjectType
  ) {
    this.projects.push({
      id: Math.random().toString(),
      title,
      description,
      peopleCount,
      type,
    });
  }

  getProjects(): Project[] {
    return this.projects;
  }
}
