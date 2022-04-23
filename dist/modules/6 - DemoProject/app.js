"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const project_input_1 = __importDefault(require("./components/project-input"));
const project_list_1 = __importDefault(require("./components/project-list"));
const project_type_enum_1 = require("./enums/project-type.enum");
const projectInputComponent = new project_input_1.default();
const activeProjectsComponent = new project_list_1.default(project_type_enum_1.ProjectType.Active);
const finishedProjectsComponent = new project_list_1.default(project_type_enum_1.ProjectType.Finished);
