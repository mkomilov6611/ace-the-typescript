import UIComponent from "./uicomponent";
export default class ProjectList extends UIComponent {
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
//# sourceMappingURL=project-list.js.map