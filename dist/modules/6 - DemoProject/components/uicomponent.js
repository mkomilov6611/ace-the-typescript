"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UIComponent {
    templateEl;
    hostEl;
    element;
    constructor({ templateId, hostId, elementId }) {
        this.templateEl = document.getElementById(templateId);
        this.hostEl = document.getElementById(hostId);
        this.element = document.importNode(this.templateEl.content, true)
            .firstElementChild;
        if (elementId) {
            this.element.id = elementId;
        }
    }
}
exports.default = UIComponent;
