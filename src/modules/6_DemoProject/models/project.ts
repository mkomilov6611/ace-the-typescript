import { ProjectType } from "../enums/project-type.enum";

export class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public peopleCount: number,
    public type: ProjectType
  ) {}
}
