"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validate(validationObj) {
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
function ContextBind(_target, _methodName, descriptor) {
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
    eventMap = new Map();
    on(event, listener) {
        this.eventMap.set(event, listener);
    }
    emit(event) {
        this.eventMap.get(event)();
    }
}
class ProjectState extends EventEmiiter {
    static instance;
    projects = [];
    constructor() {
        super();
        this.initListeners();
    }
    initListeners() {
        this.on("project-added", () => {
            this.projects.forEach((project, index) => {
                const correspondingUL = document.getElementById(`${project.type}-projects-list`);
                if (!correspondingUL) {
                    return;
                }
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
    addProject(title, description, peopleCount, type) {
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
    type;
    templateEl;
    hostEl;
    listWrapperEl;
    constructor(type) {
        this.type = type;
        this.templateEl = document.getElementById("project-list");
        this.hostEl = document.getElementById("app");
        this.listWrapperEl = document.importNode(this.templateEl.content, true)
            .firstElementChild;
        this.listWrapperEl.id = `${type}-projects`;
        this.renderContent();
        this.mountToHost();
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.listWrapperEl.querySelector("ul").id = listId;
        this.listWrapperEl.querySelector("h2").innerText = `${this.type.toUpperCase()} PROJECTS`;
    }
    mountToHost() {
        this.hostEl.insertAdjacentElement("beforeend", this.listWrapperEl);
    }
}
class ProjectInput {
    templateEl;
    hostEl;
    formEl;
    titleEl;
    descriptionEl;
    peopleCountEl;
    constructor() {
        this.templateEl = document.getElementById("project-input");
        this.hostEl = document.getElementById("app");
        this.formEl = document.importNode(this.templateEl.content, true)
            .firstElementChild;
        this.titleEl = this.formEl.querySelector("#title");
        this.descriptionEl = this.formEl.querySelector("#description");
        this.peopleCountEl = this.formEl.querySelector("#people");
        this.initListener();
        this.mountToHost();
    }
    initListener() {
        this.formEl.addEventListener("submit", this.handleFormSubmit);
    }
    handleFormSubmit(e) {
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
    gatherUserInputs() {
        const title = this.titleEl.value;
        const description = this.descriptionEl.value;
        const peopleCount = this.peopleCountEl.value;
        return [title, description, Number(peopleCount)];
    }
    clearUserInputs() {
        this.titleEl.value = "";
        this.descriptionEl.value = "";
        this.peopleCountEl.value = "";
    }
    mountToHost() {
        this.hostEl.insertAdjacentElement("afterbegin", this.formEl);
    }
}
__decorate([
    ContextBind
], ProjectInput.prototype, "handleFormSubmit", null);
const projectInput = new ProjectInput();
const activeProjects = new ProjectList("active");
const finishedProjects = new ProjectList("finished");
