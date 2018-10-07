"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotString_1 = require("basic-data-handling/errorIfNotString");
// Preferable to calling JSON.parse() because JSON.parse() doesn't
// tell you if the passed argument is not in JSON format.
function getObjectFromJSON(jsonString) {
    errorIfNotString_1.errorIfNotString(jsonString);
    try {
        return JSON.parse(jsonString);
    }
    catch (error) {
        throw new Error('Argument is not in JSON format.');
    }
}
exports.getObjectFromJSON = getObjectFromJSON;
