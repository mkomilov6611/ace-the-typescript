"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextBind = void 0;
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
exports.ContextBind = ContextBind;
