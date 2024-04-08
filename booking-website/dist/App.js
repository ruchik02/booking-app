"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var Home_1 = __importDefault(require("./pages/Home/Home"));
var List_1 = __importDefault(require("./pages/List/List"));
var Hotels_1 = __importDefault(require("./pages/Hotels/Hotels"));
var react_1 = __importDefault(require("react"));
var App = function () {
  return react_1.default.createElement(
    react_router_dom_1.BrowserRouter,
    null,
    react_1.default.createElement(
      react_router_dom_1.Routes,
      null,
      react_1.default.createElement(react_router_dom_1.Route, {
        path: "/",
        element: react_1.default.createElement(Home_1.default, null),
      }),
      react_1.default.createElement(react_router_dom_1.Route, {
        path: "/hotels",
        element: react_1.default.createElement(List_1.default, null),
      }),
      react_1.default.createElement(react_router_dom_1.Route, {
        path: "/hotels/:id",
        element: react_1.default.createElement(Hotels_1.default, null),
      }),
    ),
  );
};
exports.default = App;
