"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./mailList.css");
var MailList = function () {
  return react_1.default.createElement(
    "div",
    { className: "mail" },
    react_1.default.createElement(
      "span",
      { className: "mailTitle" },
      "Save time, save money!",
    ),
    react_1.default.createElement(
      "span",
      { className: "mailDesc" },
      "Sign up and we'll send the best deals to you",
    ),
    react_1.default.createElement(
      "div",
      { className: "mailInputContainer" },
      react_1.default.createElement("input", {
        type: "text",
        placeholder: "Your Email",
      }),
      react_1.default.createElement("button", null, "Subscribe"),
    ),
  );
};
exports.default = MailList;
