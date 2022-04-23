"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uicomponent_1 = __importDefault(require("./uicomponent"));
class ProjectList extends uicomponent_1.default {
    type;
    constructor(type) {
        super({
            templateId: "project-list",
            hostId: "app",
            elementId: `${type}-projects`,
        });
        this.type = type;
        this.configure();
        this.mountToHost();
    }
    configure() {
        this.renderContent();
    }
    mountToHost() {
        this.hostEl.insertAdjacentElement("beforeend", this.element);
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector("ul").id = listId;
        this.element.querySelector("h2").innerText = `${this.type.toUpperCase()} PROJECTS`;
    }
}
exports.default = ProjectList;
