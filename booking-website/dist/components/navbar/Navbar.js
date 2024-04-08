"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
require("./navbar.css");
var react_1 = __importDefault(require("react"));
var Navbar = function () {
  return react_1.default.createElement(
    "div",
    { className: "navbar" },
    react_1.default.createElement(
      "div",
      { className: "navContainer" },
      react_1.default.createElement(
        "span",
        { className: "logo" },
        "Booking.com",
      ),
      react_1.default.createElement(
        "div",
        { className: "navItems" },
        react_1.default.createElement(
          "button",
          { className: "navButton" },
          "Register",
        ),
        react_1.default.createElement(
          "button",
          { className: "navButton" },
          "Login",
        ),
      ),
    ),
  );
};
exports.default = Navbar;
