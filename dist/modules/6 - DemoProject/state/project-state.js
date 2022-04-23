"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProjectState {
    static instance;
    projects = [];
    constructor() { }
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
    getProjects() {
        return this.projects;
    }
}
exports.default = ProjectState;
