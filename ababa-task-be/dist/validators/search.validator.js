"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateSearch = (value) => {
    if (typeof value !== "string") {
        return false;
    }
    const regexp = /[A-Za-z]+/g;
    const result = value.match(regexp);
    return result !== null;
};
exports.default = validateSearch;
//# sourceMappingURL=search.validator.js.map