import UIComponent from "./uicomponent";
import { ContextBind } from "../decorators/context-bind";
import { validate } from "../util/validation.util";
import { ProjectType } from "../enums/project-type.enum";
import ProjectState from "../state/project-state";

export default class ProjectInput extends UIComponent<
  HTMLFormElement,
  HTMLElement
> {
  titleEl: HTMLInputElement;
  descriptionEl: HTMLInputElement;
  peopleCountEl: HTMLInputElement;

  constructor() {
    super({
      templateId: "project-input",
      hostId: "app",
    });

    this.titleEl = this.element.querySelector("#title")!;
    this.descriptionEl = this.element.querySelector("#description")!;
    this.peopleCountEl = this.element.querySelector("#people")!;

    this.configure();
    this.mountToHost();
  }

  configure() {
    this.initListener();
    this.renderContent();
  }

  mountToHost() {
    this.hostEl.insertAdjacentElement("afterbegin", this.element);
  }

  private initListener() {
    this.element.addEventListener("submit", this.handleFormSubmit);
  }

  @ContextBind
  private handleFormSubmit(e: Event) {
    e.preventDefault();

    const [title, description, peopleCount] = this.gatherUserInputs();

    const validationQueue = [
      {
        value: title,
        required: true,
        minLength: 5,
        maxLength: 30,
      },
      {
        value: description,
        required: true,
        minLength: 5,
        maxLength: 30,
      },
      {
        value: peopleCount,
        required: true,
        minLength: 5,
        maxLength: 30,
      },
    ];

    const canSubmit = validationQueue.every((validatable) => {
      return validate(validatable);
    });

    if (!canSubmit) {
      alert("Incorrect Form");
      return;
    }

    projectState.addProject(
      title,
      description,
      peopleCount,
      ProjectType.Active
    );

    this.renderContent();
    this.clearUserInputs();
  }

  private renderContent() {
    projectState.getProjects().forEach((project, index) => {
      const correspondingUL = document.getElementById(
        `${project.type}-projects-list`
      );

      if (!correspondingUL) {
        return;
      }

      // Flush UL on first element
      if (index == 0) {
        correspondingUL.innerHTML = "";
      }

      const listItem = document.createElement("li");
      listItem.innerText = project.title;

      correspondingUL.appendChild(listItem);
    });
  }

  private gatherUserInputs(): [string, string, number] {
    const title = this.titleEl.value;
    const description = this.descriptionEl.value;
    const peopleCount = this.peopleCountEl.value;

    return [title, description, Number(peopleCount)];
  }

  private clearUserInputs(): void {
    this.titleEl.value = "";
    this.descriptionEl.value = "";
    this.peopleCountEl.value = "";
  }
}

const projectState = ProjectState.getInstance();
