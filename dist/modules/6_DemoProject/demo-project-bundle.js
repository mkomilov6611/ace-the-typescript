/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/6_DemoProject/components/project-input.ts":
/*!***************************************************************!*\
  !*** ./src/modules/6_DemoProject/components/project-input.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectInput)
/* harmony export */ });
/* harmony import */ var _uicomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uicomponent */ "./src/modules/6_DemoProject/components/uicomponent.ts");
/* harmony import */ var _decorators_context_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators/context-bind */ "./src/modules/6_DemoProject/decorators/context-bind.ts");
/* harmony import */ var _util_validation_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/validation.util */ "./src/modules/6_DemoProject/util/validation.util.ts");
/* harmony import */ var _enums_project_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/project-type.enum */ "./src/modules/6_DemoProject/enums/project-type.enum.ts");
/* harmony import */ var _state_project_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/project-state */ "./src/modules/6_DemoProject/state/project-state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





class ProjectInput extends _uicomponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
            return (0,_util_validation_util__WEBPACK_IMPORTED_MODULE_2__.validate)(validatable);
        });
        if (!canSubmit) {
            alert("Incorrect Form");
            return;
        }
        projectState.addProject(title, description, peopleCount, _enums_project_type_enum__WEBPACK_IMPORTED_MODULE_3__.ProjectType.Active);
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
    _decorators_context_bind__WEBPACK_IMPORTED_MODULE_1__.ContextBind
], ProjectInput.prototype, "handleFormSubmit", null);
const projectState = _state_project_state__WEBPACK_IMPORTED_MODULE_4__["default"].getInstance();


/***/ }),

/***/ "./src/modules/6_DemoProject/components/project-list.ts":
/*!**************************************************************!*\
  !*** ./src/modules/6_DemoProject/components/project-list.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectList)
/* harmony export */ });
/* harmony import */ var _uicomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uicomponent */ "./src/modules/6_DemoProject/components/uicomponent.ts");

class ProjectList extends _uicomponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
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


/***/ }),

/***/ "./src/modules/6_DemoProject/components/uicomponent.ts":
/*!*************************************************************!*\
  !*** ./src/modules/6_DemoProject/components/uicomponent.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UIComponent)
/* harmony export */ });
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


/***/ }),

/***/ "./src/modules/6_DemoProject/decorators/context-bind.ts":
/*!**************************************************************!*\
  !*** ./src/modules/6_DemoProject/decorators/context-bind.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextBind": () => (/* binding */ ContextBind)
/* harmony export */ });
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


/***/ }),

/***/ "./src/modules/6_DemoProject/enums/project-type.enum.ts":
/*!**************************************************************!*\
  !*** ./src/modules/6_DemoProject/enums/project-type.enum.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectType": () => (/* binding */ ProjectType)
/* harmony export */ });
var ProjectType;
(function (ProjectType) {
    ProjectType["Active"] = "active";
    ProjectType["Finished"] = "finished";
})(ProjectType || (ProjectType = {}));


/***/ }),

/***/ "./src/modules/6_DemoProject/state/project-state.ts":
/*!**********************************************************!*\
  !*** ./src/modules/6_DemoProject/state/project-state.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectState)
/* harmony export */ });
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


/***/ }),

/***/ "./src/modules/6_DemoProject/util/validation.util.ts":
/*!***********************************************************!*\
  !*** ./src/modules/6_DemoProject/util/validation.util.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validate": () => (/* binding */ validate)
/* harmony export */ });
function validate(validationObj) {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ./src/modules/6_DemoProject/app.ts ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_project_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/project-input */ "./src/modules/6_DemoProject/components/project-input.ts");
/* harmony import */ var _components_project_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/project-list */ "./src/modules/6_DemoProject/components/project-list.ts");
/* harmony import */ var _enums_project_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums/project-type.enum */ "./src/modules/6_DemoProject/enums/project-type.enum.ts");



const projectInputComponent = new _components_project_input__WEBPACK_IMPORTED_MODULE_0__["default"]();
const activeProjectsComponent = new _components_project_list__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_project_type_enum__WEBPACK_IMPORTED_MODULE_2__.ProjectType.Active);
const finishedProjectsComponent = new _components_project_list__WEBPACK_IMPORTED_MODULE_1__["default"](_enums_project_type_enum__WEBPACK_IMPORTED_MODULE_2__.ProjectType.Finished);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnNEO0FBQ0Y7QUFDSTtBQUV4RCxNQUFNLHFCQUFxQixHQUFHLElBQUksaUVBQVksRUFBRSxDQUFDO0FBQ2pELE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxnRUFBVyxDQUFDLHdFQUFrQixDQUFDLENBQUM7QUFDcEUsTUFBTSx5QkFBeUIsR0FBRyxJQUFJLGdFQUFXLENBQUMsMEVBQW9CLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHQtY291cnNlLy4vc3JjL21vZHVsZXMvNl9EZW1vUHJvamVjdC9jb21wb25lbnRzL3Byb2plY3QtaW5wdXQudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1jb3Vyc2UvLi9zcmMvbW9kdWxlcy82X0RlbW9Qcm9qZWN0L2NvbXBvbmVudHMvcHJvamVjdC1saXN0LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtY291cnNlLy4vc3JjL21vZHVsZXMvNl9EZW1vUHJvamVjdC9jb21wb25lbnRzL3VpY29tcG9uZW50LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtY291cnNlLy4vc3JjL21vZHVsZXMvNl9EZW1vUHJvamVjdC9kZWNvcmF0b3JzL2NvbnRleHQtYmluZC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWNvdXJzZS8uL3NyYy9tb2R1bGVzLzZfRGVtb1Byb2plY3QvZW51bXMvcHJvamVjdC10eXBlLmVudW0udHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1jb3Vyc2UvLi9zcmMvbW9kdWxlcy82X0RlbW9Qcm9qZWN0L3N0YXRlL3Byb2plY3Qtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1jb3Vyc2UvLi9zcmMvbW9kdWxlcy82X0RlbW9Qcm9qZWN0L3V0aWwvdmFsaWRhdGlvbi51dGlsLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtY291cnNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHQtY291cnNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWNvdXJzZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHQtY291cnNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1jb3Vyc2UvLi9zcmMvbW9kdWxlcy82X0RlbW9Qcm9qZWN0L2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlDb21wb25lbnQgZnJvbSBcIi4vdWljb21wb25lbnRcIjtcbmltcG9ydCB7IENvbnRleHRCaW5kIH0gZnJvbSBcIi4uL2RlY29yYXRvcnMvY29udGV4dC1iaW5kXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZSB9IGZyb20gXCIuLi91dGlsL3ZhbGlkYXRpb24udXRpbFwiO1xuaW1wb3J0IHsgUHJvamVjdFR5cGUgfSBmcm9tIFwiLi4vZW51bXMvcHJvamVjdC10eXBlLmVudW1cIjtcbmltcG9ydCBQcm9qZWN0U3RhdGUgZnJvbSBcIi4uL3N0YXRlL3Byb2plY3Qtc3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdElucHV0IGV4dGVuZHMgVUlDb21wb25lbnQ8XG4gIEhUTUxGb3JtRWxlbWVudCxcbiAgSFRNTEVsZW1lbnRcbj4ge1xuICB0aXRsZUVsOiBIVE1MSW5wdXRFbGVtZW50O1xuICBkZXNjcmlwdGlvbkVsOiBIVE1MSW5wdXRFbGVtZW50O1xuICBwZW9wbGVDb3VudEVsOiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIHRlbXBsYXRlSWQ6IFwicHJvamVjdC1pbnB1dFwiLFxuICAgICAgaG9zdElkOiBcImFwcFwiLFxuICAgIH0pO1xuXG4gICAgdGhpcy50aXRsZUVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikhO1xuICAgIHRoaXMuZGVzY3JpcHRpb25FbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpITtcbiAgICB0aGlzLnBlb3BsZUNvdW50RWwgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNwZW9wbGVcIikhO1xuXG4gICAgdGhpcy5jb25maWd1cmUoKTtcbiAgICB0aGlzLm1vdW50VG9Ib3N0KCk7XG4gIH1cblxuICBjb25maWd1cmUoKSB7XG4gICAgdGhpcy5pbml0TGlzdGVuZXIoKTtcbiAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgfVxuXG4gIG1vdW50VG9Ib3N0KCkge1xuICAgIHRoaXMuaG9zdEVsLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgdGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdExpc3RlbmVyKCkge1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuaGFuZGxlRm9ybVN1Ym1pdCk7XG4gIH1cblxuICBAQ29udGV4dEJpbmRcbiAgcHJpdmF0ZSBoYW5kbGVGb3JtU3VibWl0KGU6IEV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgW3RpdGxlLCBkZXNjcmlwdGlvbiwgcGVvcGxlQ291bnRdID0gdGhpcy5nYXRoZXJVc2VySW5wdXRzKCk7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uUXVldWUgPSBbXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiB0aXRsZSxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIG1pbkxlbmd0aDogNSxcbiAgICAgICAgbWF4TGVuZ3RoOiAzMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiBkZXNjcmlwdGlvbixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIG1pbkxlbmd0aDogNSxcbiAgICAgICAgbWF4TGVuZ3RoOiAzMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiBwZW9wbGVDb3VudCxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIG1pbkxlbmd0aDogNSxcbiAgICAgICAgbWF4TGVuZ3RoOiAzMCxcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIGNvbnN0IGNhblN1Ym1pdCA9IHZhbGlkYXRpb25RdWV1ZS5ldmVyeSgodmFsaWRhdGFibGUpID0+IHtcbiAgICAgIHJldHVybiB2YWxpZGF0ZSh2YWxpZGF0YWJsZSk7XG4gICAgfSk7XG5cbiAgICBpZiAoIWNhblN1Ym1pdCkge1xuICAgICAgYWxlcnQoXCJJbmNvcnJlY3QgRm9ybVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcm9qZWN0U3RhdGUuYWRkUHJvamVjdChcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBwZW9wbGVDb3VudCxcbiAgICAgIFByb2plY3RUeXBlLkFjdGl2ZVxuICAgICk7XG5cbiAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgICB0aGlzLmNsZWFyVXNlcklucHV0cygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJDb250ZW50KCkge1xuICAgIHByb2plY3RTdGF0ZS5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjb3JyZXNwb25kaW5nVUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgYCR7cHJvamVjdC50eXBlfS1wcm9qZWN0cy1saXN0YFxuICAgICAgKTtcblxuICAgICAgaWYgKCFjb3JyZXNwb25kaW5nVUwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBGbHVzaCBVTCBvbiBmaXJzdCBlbGVtZW50XG4gICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICBjb3JyZXNwb25kaW5nVUwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBsaXN0SXRlbS5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICBjb3JyZXNwb25kaW5nVUwuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnYXRoZXJVc2VySW5wdXRzKCk6IFtzdHJpbmcsIHN0cmluZywgbnVtYmVyXSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLnRpdGxlRWwudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmRlc2NyaXB0aW9uRWwudmFsdWU7XG4gICAgY29uc3QgcGVvcGxlQ291bnQgPSB0aGlzLnBlb3BsZUNvdW50RWwudmFsdWU7XG5cbiAgICByZXR1cm4gW3RpdGxlLCBkZXNjcmlwdGlvbiwgTnVtYmVyKHBlb3BsZUNvdW50KV07XG4gIH1cblxuICBwcml2YXRlIGNsZWFyVXNlcklucHV0cygpOiB2b2lkIHtcbiAgICB0aGlzLnRpdGxlRWwudmFsdWUgPSBcIlwiO1xuICAgIHRoaXMuZGVzY3JpcHRpb25FbC52YWx1ZSA9IFwiXCI7XG4gICAgdGhpcy5wZW9wbGVDb3VudEVsLnZhbHVlID0gXCJcIjtcbiAgfVxufVxuXG5jb25zdCBwcm9qZWN0U3RhdGUgPSBQcm9qZWN0U3RhdGUuZ2V0SW5zdGFuY2UoKTtcbiIsImltcG9ydCB7IFByb2plY3RUeXBlIH0gZnJvbSBcIi4uL2VudW1zL3Byb2plY3QtdHlwZS5lbnVtXCI7XG5pbXBvcnQgVUlDb21wb25lbnQgZnJvbSBcIi4vdWljb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdExpc3QgZXh0ZW5kcyBVSUNvbXBvbmVudDxcbiAgSFRNTEZvcm1FbGVtZW50LFxuICBIVE1MRWxlbWVudFxuPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHlwZTogUHJvamVjdFR5cGUpIHtcbiAgICBzdXBlcih7XG4gICAgICB0ZW1wbGF0ZUlkOiBcInByb2plY3QtbGlzdFwiLFxuICAgICAgaG9zdElkOiBcImFwcFwiLFxuICAgICAgZWxlbWVudElkOiBgJHt0eXBlfS1wcm9qZWN0c2AsXG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbmZpZ3VyZSgpO1xuICAgIHRoaXMubW91bnRUb0hvc3QoKTtcbiAgfVxuICBjb25maWd1cmUoKSB7XG4gICAgdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gIH1cblxuICBtb3VudFRvSG9zdCgpIHtcbiAgICB0aGlzLmhvc3RFbC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgdGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBsaXN0SWQgPSBgJHt0aGlzLnR5cGV9LXByb2plY3RzLWxpc3RgO1xuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIikhLmlkID0gbGlzdElkO1xuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCJoMlwiXG4gICAgKSEuaW5uZXJUZXh0ID0gYCR7dGhpcy50eXBlLnRvVXBwZXJDYXNlKCl9IFBST0pFQ1RTYDtcbiAgfVxufVxuIiwiaW50ZXJmYWNlIENvbXBvbmVudGFibGUge1xuICB0ZW1wbGF0ZUlkOiBzdHJpbmc7XG4gIGhvc3RJZDogc3RyaW5nO1xuICBlbGVtZW50SWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFVJQ29tcG9uZW50PFxuICBUIGV4dGVuZHMgSFRNTEVsZW1lbnQsXG4gIFUgZXh0ZW5kcyBIVE1MRWxlbWVudFxuPiB7XG4gIHRlbXBsYXRlRWw6IEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG4gIGhvc3RFbDogVDtcbiAgZWxlbWVudDogVTtcblxuICBjb25zdHJ1Y3Rvcih7IHRlbXBsYXRlSWQsIGhvc3RJZCwgZWxlbWVudElkIH06IENvbXBvbmVudGFibGUpIHtcbiAgICB0aGlzLnRlbXBsYXRlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIHRlbXBsYXRlSWRcbiAgICApISBhcyBIVE1MVGVtcGxhdGVFbGVtZW50O1xuXG4gICAgdGhpcy5ob3N0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChob3N0SWQpISBhcyBUO1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGhpcy50ZW1wbGF0ZUVsLmNvbnRlbnQsIHRydWUpXG4gICAgICAuZmlyc3RFbGVtZW50Q2hpbGQgYXMgVTtcblxuICAgIGlmIChlbGVtZW50SWQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5pZCA9IGVsZW1lbnRJZDtcbiAgICB9XG4gIH1cblxuICBhYnN0cmFjdCBjb25maWd1cmU/KCk6IHZvaWQ7XG4gIGFic3RyYWN0IG1vdW50VG9Ib3N0KCk6IHZvaWQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQ29udGV4dEJpbmQoXG4gIF90YXJnZXQ6IGFueSxcbiAgX21ldGhvZE5hbWU6IHN0cmluZyxcbiAgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yXG4pOiBQcm9wZXJ0eURlc2NyaXB0b3Ige1xuICBjb25zdCBvcmlnaW5hbE1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgcmV0dXJuIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsTWV0aG9kLmJpbmQodGhpcyk7XG4gICAgfSxcbiAgfTtcbn1cbiIsImV4cG9ydCBlbnVtIFByb2plY3RUeXBlIHtcbiAgQWN0aXZlID0gXCJhY3RpdmVcIixcbiAgRmluaXNoZWQgPSBcImZpbmlzaGVkXCIsXG59XG4iLCJpbXBvcnQgeyBQcm9qZWN0VHlwZSB9IGZyb20gXCIuLi9lbnVtcy9wcm9qZWN0LXR5cGUuZW51bVwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0U3RhdGUge1xuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUHJvamVjdFN0YXRlO1xuICBwcml2YXRlIHByb2plY3RzOiBQcm9qZWN0W10gPSBbXTtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUHJvamVjdFN0YXRlKCk7XG5cbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIGFkZFByb2plY3QoXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgIHBlb3BsZUNvdW50OiBudW1iZXIsXG4gICAgdHlwZTogUHJvamVjdFR5cGVcbiAgKSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHtcbiAgICAgIGlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCksXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgcGVvcGxlQ291bnQsXG4gICAgICB0eXBlLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0UHJvamVjdHMoKTogUHJvamVjdFtdIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgfVxufVxuIiwiaW50ZXJmYWNlIFZhbGlkYXRhYmxlIHtcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICBtaW5MZW5ndGg/OiBudW1iZXI7XG4gIG1heExlbmd0aD86IG51bWJlcjtcbiAgbWluPzogbnVtYmVyO1xuICBtYXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZSh2YWxpZGF0aW9uT2JqOiBWYWxpZGF0YWJsZSkge1xuICBjb25zdCB7IHZhbHVlIH0gPSB2YWxpZGF0aW9uT2JqO1xuICBjb25zdCBjb25kaXRpb25zID0gW107XG5cbiAgY29uc3QgaXNTdHJpbmcgPSB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCI7XG4gIGNvbnN0IGlzTnVtYmVyID0gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiO1xuXG4gIGNvbnN0IHZhbHVlTGVuZ3RoID0gdmFsdWUudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoO1xuXG4gIGlmIChpc1N0cmluZyAmJiB2YWxpZGF0aW9uT2JqLm1pbkxlbmd0aCkge1xuICAgIGNvbmRpdGlvbnMucHVzaCh2YWx1ZUxlbmd0aCA+PSB2YWxpZGF0aW9uT2JqLm1pbkxlbmd0aCk7XG4gIH1cbiAgaWYgKGlzU3RyaW5nICYmIHZhbGlkYXRpb25PYmoubWF4TGVuZ3RoKSB7XG4gICAgY29uZGl0aW9ucy5wdXNoKHZhbHVlTGVuZ3RoIDw9IHZhbGlkYXRpb25PYmoubWF4TGVuZ3RoKTtcbiAgfVxuXG4gIGlmIChpc051bWJlciAmJiB2YWxpZGF0aW9uT2JqLm1pbikge1xuICAgIGNvbmRpdGlvbnMucHVzaCh2YWx1ZSA+PSB2YWxpZGF0aW9uT2JqLm1pbik7XG4gIH1cblxuICBpZiAoaXNOdW1iZXIgJiYgdmFsaWRhdGlvbk9iai5tYXgpIHtcbiAgICBjb25kaXRpb25zLnB1c2godmFsdWUgPD0gdmFsaWRhdGlvbk9iai5tYXgpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmRpdGlvbnMuZXZlcnkoKGNvbmRpdGlvbikgPT4gY29uZGl0aW9uID09PSB0cnVlKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFByb2plY3RJbnB1dCBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3QtaW5wdXRcIjtcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3QtbGlzdFwiO1xuaW1wb3J0IHsgUHJvamVjdFR5cGUgfSBmcm9tIFwiLi9lbnVtcy9wcm9qZWN0LXR5cGUuZW51bVwiO1xuXG5jb25zdCBwcm9qZWN0SW5wdXRDb21wb25lbnQgPSBuZXcgUHJvamVjdElucHV0KCk7XG5jb25zdCBhY3RpdmVQcm9qZWN0c0NvbXBvbmVudCA9IG5ldyBQcm9qZWN0TGlzdChQcm9qZWN0VHlwZS5BY3RpdmUpO1xuY29uc3QgZmluaXNoZWRQcm9qZWN0c0NvbXBvbmVudCA9IG5ldyBQcm9qZWN0TGlzdChQcm9qZWN0VHlwZS5GaW5pc2hlZCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=