"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateYear = (value) => {
    if (typeof value !== "string") {
        return false;
    }
    const regexp = /^\d+$/g;
    const result = value.match(regexp);
    return result !== null;
};
exports.default = validateYear;
//# sourceMappingURL=years.validator.js.map