"use strict";
exports.__esModule = true;
var uuid_1 = require("uuid");
var makeObject = function () { return ({ id: uuid_1.v4() }); };
console.log(makeObject());
console.log(makeObject());
