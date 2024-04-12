"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var Featured_1 = __importDefault(require("../../components/featured/Featured"));
var Header_1 = __importDefault(require("../../components/header/Header"));
var Navbar_1 = __importDefault(require("../../components/navbar/Navbar"));
var propertyList_1 = __importDefault(
  require("../../components/propertyList/propertyList"),
);
var react_1 = __importDefault(require("react"));
require("./home.css");
var FeaturedProperty_1 = __importDefault(
  require("../../components/featuredProperty/FeaturedProperty"),
);
var mailList_1 = __importDefault(require("../../components/mailList/mailList"));
var Home = function () {
  return react_1.default.createElement(
    react_1.default.Fragment,
    null,
    react_1.default.createElement(Navbar_1.default, null),
    react_1.default.createElement(Header_1.default, { type: "" }),
    react_1.default.createElement(
      "div",
      { className: "homeContainer" },
      react_1.default.createElement(Featured_1.default, null),
      react_1.default.createElement(
        "h1",
        { className: "homeTitle" },
        "Browser by property type",
      ),
      react_1.default.createElement(propertyList_1.default, null),
      react_1.default.createElement(
        "h1",
        { className: "homeTitle" },
        "Homes guests love",
      ),
      react_1.default.createElement(FeaturedProperty_1.default, null),
      react_1.default.createElement(mailList_1.default, null),
    ),
  );
};
exports.default = Home;
