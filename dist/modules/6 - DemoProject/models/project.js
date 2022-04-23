"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
class Project {
    id;
    title;
    description;
    peopleCount;
    type;
    constructor(id, title, description, peopleCount, type) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.peopleCount = peopleCount;
        this.type = type;
    }
}
exports.Project = Project;
