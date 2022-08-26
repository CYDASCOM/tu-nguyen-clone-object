"use strict";
const copy = (object) => {
  return JSON.parse(JSON.stringify(object));
};
module.exports = function cloneObject(object) {
  if (typeof object === "function") {
    throw new Error("Uncaught SyntaxError: function-type is not valid JSON");
  }
  if (typeof object !== "object") {
    return object;
  }
  return copy(object);
};
