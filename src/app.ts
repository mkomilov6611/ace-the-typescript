interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

enum ProjectType {
  Active = "active",
  Finished = "finished",
}

function validate(validationObj: Validatable) {
  const { value } = validationObj;
  const conditions = [];

  const isString = typeof value === "string";
  const isNumber = typeof value === "number";

  const valueLength = value.toString().trim().length;

  if (isString && validationObj.minLength) {
    conditions.push(valueLength >= validationObj.minLength);
  }
  if (isString && validationObj.maxLength) {
    conditions.push(valueLength <= validationObj.maxLength);
  }

  if (isNumber && validationObj.min) {
    conditions.push(value >= validationObj.min);
  }

  if (isNumber && validationObj.max) {
    conditions.push(value <= validationObj.max);
  }

  return conditions.every((condition) => condition === true);
}

/* Decorators */
function ContextBind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;

  return {
    configurable: true,
    enumerable: false,
    get() {
      return originalMethod.bind(this);
    },
  };
}

interface Componentable {
  templateId: string;
  hostId: string;
  elementId?: string;
}

abstract class UIComponent<T extends HTMLElement, U extends HTMLElement> {
  templateEl: HTMLTemplateElement;
  hostEl: T;
  element: U;

  constructor({ templateId, hostId, elementId }: Componentable) {
    this.templateEl = document.getElementById(
      templateId
    )! as HTMLTemplateElement;

    this.hostEl = document.getElementById(hostId)! as T;
    this.element = document.importNode(this.templateEl.content, true)
      .firstElementChild as U;

    if (elementId) {
      this.element.id = elementId;
    }
  }

  abstract configure?(): void;
  abstract mountToHost(): void;
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public peopleCount: number,
    public type: ProjectType
  ) {}
}

class ProjectState {
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

class ProjectList extends UIComponent<HTMLFormElement, HTMLElement> {
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

class ProjectInput extends UIComponent<HTMLFormElement, HTMLElement> {
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

const projectInputComponent = new ProjectInput();
const activeProjectsComponent = new ProjectList(ProjectType.Active);
const finishedProjectsComponent = new ProjectList(ProjectType.Finished);
