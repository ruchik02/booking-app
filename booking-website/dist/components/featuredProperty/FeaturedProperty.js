"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
require("./featuredProperty.css");
var react_1 = __importDefault(require("react"));
var FeaturedProperty = function () {
  return react_1.default.createElement(
    "div",
    { className: "fp" },
    react_1.default.createElement(
      "div",
      { className: "fpItem" },
      react_1.default.createElement("img", {
        src: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
        alt: "",
        className: "fpImg",
      }),
      react_1.default.createElement(
        "span",
        { className: "fpName" },
        "Aparthotel Stare Miasto",
      ),
      react_1.default.createElement("span", { className: "fpCity" }, "Madrid"),
      react_1.default.createElement(
        "span",
        { className: "fpPrice" },
        "Starting from $120",
      ),
      react_1.default.createElement(
        "div",
        { className: "fpRating" },
        react_1.default.createElement("button", null, "8.9"),
        react_1.default.createElement("span", null, "Excellent"),
      ),
    ),
    react_1.default.createElement(
      "div",
      { className: "fpItem" },
      react_1.default.createElement("img", {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1",
        alt: "",
        className: "fpImg",
      }),
      react_1.default.createElement(
        "span",
        { className: "fpName" },
        "Comfort Suites Airport",
      ),
      react_1.default.createElement("span", { className: "fpCity" }, "Austin"),
      react_1.default.createElement(
        "span",
        { className: "fpPrice" },
        "Starting from $140",
      ),
      react_1.default.createElement(
        "div",
        { className: "fpRating" },
        react_1.default.createElement("button", null, "9.3"),
        react_1.default.createElement("span", null, "Exceptional"),
      ),
    ),
    react_1.default.createElement(
      "div",
      { className: "fpItem" },
      react_1.default.createElement("img", {
        src: "https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o=",
        alt: "",
        className: "fpImg",
      }),
      react_1.default.createElement(
        "span",
        { className: "fpName" },
        "Four Seasons Hotel",
      ),
      react_1.default.createElement("span", { className: "fpCity" }, "Lisbon"),
      react_1.default.createElement(
        "span",
        { className: "fpPrice" },
        "Starting from $99",
      ),
      react_1.default.createElement(
        "div",
        { className: "fpRating" },
        react_1.default.createElement("button", null, "8.8"),
        react_1.default.createElement("span", null, "Excellent"),
      ),
    ),
    react_1.default.createElement(
      "div",
      { className: "fpItem" },
      react_1.default.createElement("img", {
        src: "https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=",
        alt: "",
        className: "fpImg",
      }),
      react_1.default.createElement(
        "span",
        { className: "fpName" },
        "Hilton Garden Inn",
      ),
      react_1.default.createElement("span", { className: "fpCity" }, "Berlin"),
      react_1.default.createElement(
        "span",
        { className: "fpPrice" },
        "Starting from $105",
      ),
      react_1.default.createElement(
        "div",
        { className: "fpRating" },
        react_1.default.createElement("button", null, "8.9"),
        react_1.default.createElement("span", null, "Excellent"),
      ),
    ),
  );
};
exports.default = FeaturedProperty;
