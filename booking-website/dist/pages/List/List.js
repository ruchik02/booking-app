"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var Header_1 = __importDefault(require("../../components/header/Header"));
var Navbar_1 = __importDefault(require("../../components/navbar/Navbar"));
var react_1 = __importDefault(require("react"));
var List = function () {
  return react_1.default.createElement(
    "div",
    null,
    react_1.default.createElement(Navbar_1.default, null),
    " ",
    react_1.default.createElement(Header_1.default, { type: "list" }),
  );
};
exports.default = List;
