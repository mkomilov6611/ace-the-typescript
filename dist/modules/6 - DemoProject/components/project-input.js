"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uicomponent_1 = __importDefault(require("./uicomponent"));
const context_bind_1 = require("../decorators/context-bind");
const validation_util_1 = require("../util/validation.util");
const project_type_enum_1 = require("../enums/project-type.enum");
const project_state_1 = __importDefault(require("../state/project-state"));
class ProjectInput extends uicomponent_1.default {
    titleEl;
    descriptionEl;
    peopleCountEl;
    constructor() {
        super({
            templateId: "project-input",
            hostId: "app",
        });
        this.titleEl = this.element.querySelector("#title");
        this.descriptionEl = this.element.querySelector("#description");
        this.peopleCountEl = this.element.querySelector("#people");
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
    initListener() {
        this.element.addEventListener("submit", this.handleFormSubmit);
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
            return (0, validation_util_1.validate)(validatable);
        });
        if (!canSubmit) {
            alert("Incorrect Form");
            return;
        }
        projectState.addProject(title, description, peopleCount, project_type_enum_1.ProjectType.Active);
        this.renderContent();
        this.clearUserInputs();
    }
    renderContent() {
        projectState.getProjects().forEach((project, index) => {
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
}
__decorate([
    context_bind_1.ContextBind
], ProjectInput.prototype, "handleFormSubmit", null);
exports.default = ProjectInput;
const projectState = project_state_1.default.getInstance();
