interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

type ProjectType = "active" | "finished";

function validate(validationObj: Validatable) {
  let isValid = true;

  const { value } = validationObj;

  const isString = typeof value === "string";
  const isNumber = typeof value === "number";

  const valueLength = value.toString().trim().length;

  if (isString && validationObj.minLength) {
    isValid = isValid && valueLength >= validationObj.minLength;
  }
  if (isString && validationObj.maxLength) {
    isValid = isValid && valueLength <= validationObj.maxLength;
  }

  if (isNumber && validationObj.min) {
    isValid = isValid && value >= validationObj.min;
  }

  if (isNumber && validationObj.max) {
    isValid = isValid && value <= validationObj.max;
  }

  return isValid;
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

class EventEmiiter {
  private eventMap = new Map();

  on(event: string, listener: Function) {
    this.eventMap.set(event, listener);
  }

  emit(event: string) {
    this.eventMap.get(event)();
  }
}

class ProjectState extends EventEmiiter {
  private static instance: ProjectState;
  private projects: any[] = [];

  private constructor() {
    super();
    this.initListeners();
  }

  initListeners() {
    this.on("project-added", () => {
      this.projects.forEach((project, index) => {
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
    });
  }

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
}

const projectState = ProjectState.getInstance();

class ProjectList {
  templateEl: HTMLTemplateElement;
  hostEl: HTMLDivElement;
  listWrapperEl: HTMLElement;

  constructor(private type: ProjectType) {
    this.templateEl = document.getElementById(
      "project-list"
    )! as HTMLTemplateElement;
    this.hostEl = document.getElementById("app")! as HTMLDivElement;
    this.listWrapperEl = document.importNode(this.templateEl.content, true)
      .firstElementChild as HTMLElement;

    this.listWrapperEl.id = `${type}-projects`;

    this.renderContent();
    this.mountToHost();
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`;
    this.listWrapperEl.querySelector("ul")!.id = listId;
    this.listWrapperEl.querySelector(
      "h2"
    )!.innerText = `${this.type.toUpperCase()} PROJECTS`;
  }

  private mountToHost() {
    this.hostEl.insertAdjacentElement("beforeend", this.listWrapperEl);
  }
}

class ProjectInput {
  templateEl: HTMLTemplateElement;
  hostEl: HTMLDivElement;
  formEl: HTMLElement;
  titleEl: HTMLInputElement;
  descriptionEl: HTMLInputElement;
  peopleCountEl: HTMLInputElement;

  constructor() {
    this.templateEl = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostEl = document.getElementById("app")! as HTMLDivElement;
    this.formEl = document.importNode(this.templateEl.content, true)
      .firstElementChild as HTMLElement;

    this.titleEl = this.formEl.querySelector("#title")!;
    this.descriptionEl = this.formEl.querySelector("#description")!;
    this.peopleCountEl = this.formEl.querySelector("#people")!;

    this.initListener();
    this.mountToHost();
  }

  private initListener() {
    this.formEl.addEventListener("submit", this.handleFormSubmit);
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

    projectState.addProject(title, description, peopleCount, "active");
    projectState.emit("project-added");

    this.clearUserInputs();
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

  private mountToHost() {
    this.hostEl.insertAdjacentElement("afterbegin", this.formEl);
  }
}

const projectInput = new ProjectInput();

const activeProjects = new ProjectList("active");
const finishedProjects = new ProjectList("finished");
