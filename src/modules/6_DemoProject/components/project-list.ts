import { ProjectType } from "../enums/project-type.enum";
import UIComponent from "./uicomponent";

export default class ProjectList extends UIComponent<
  HTMLFormElement,
  HTMLElement
> {
  constructor(private type: ProjectType) {
    super({
      templateId: "project-list",
      hostId: "app",
      elementId: `${type}-projects`,
    });

    this.configure();
    this.mountToHost();
  }
  configure() {
    this.renderContent();
  }

  mountToHost() {
    this.hostEl.insertAdjacentElement("beforeend", this.element);
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector(
      "h2"
    )!.innerText = `${this.type.toUpperCase()} PROJECTS`;
  }
}
