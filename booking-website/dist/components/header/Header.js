"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
require("./header.css");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_1 = require("react");
var react_date_range_1 = require("react-date-range");
require("react-date-range/dist/styles.css"); // main style file
require("react-date-range/dist/theme/default.css"); // theme css file
var date_fns_1 = require("date-fns");
var react_2 = __importDefault(require("react"));
var Header = function (_a) {
  var type = _a.type;
  var _b = (0, react_1.useState)(false),
    openDate = _b[0],
    setOpenDate = _b[1];
  var _c = (0, react_1.useState)(false),
    openOptions = _c[0],
    setOpenOptions = _c[1];
  var _d = (0, react_1.useState)({
      adult: 1,
      children: 0,
      room: 1,
    }),
    options = _d[0],
    setOptions = _d[1];
  var _e = (0, react_1.useState)([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]),
    date = _e[0],
    setDate = _e[1];
  var handleOption = function (name, operation) {
    setOptions(function (prev) {
      var _a;
      return __assign(
        __assign({}, prev),
        ((_a = {}),
        (_a[name] = operation === "i" ? options[name] + 1 : options[name] - 1),
        _a),
      );
    });
  };
  return react_2.default.createElement(
    "div",
    { className: "header" },
    react_2.default.createElement(
      "div",
      {
        className:
          type === "list" ? "headerContainer listMode" : "headerContainer",
      },
      react_2.default.createElement(
        "div",
        { className: "headerList" },
        react_2.default.createElement(
          "div",
          { className: "headerListItem active" },
          react_2.default.createElement(react_fontawesome_1.FontAwesomeIcon, {
            icon: free_solid_svg_icons_1.faBed,
          }),
          react_2.default.createElement("span", null, "Stays"),
        ),
        react_2.default.createElement(
          "div",
          { className: "headerListItem" },
          react_2.default.createElement(react_fontawesome_1.FontAwesomeIcon, {
            icon: free_solid_svg_icons_1.faPlane,
          }),
          react_2.default.createElement("span", null, "Flights"),
        ),
        react_2.default.createElement(
          "div",
          { className: "headerListItem" },
          react_2.default.createElement(react_fontawesome_1.FontAwesomeIcon, {
            icon: free_solid_svg_icons_1.faCar,
          }),
          react_2.default.createElement("span", null, "Car rentals"),
        ),
        react_2.default.createElement(
          "div",
          { className: "headerListItem" },
          react_2.default.createElement(react_fontawesome_1.FontAwesomeIcon, {
            icon: free_solid_svg_icons_1.faBed,
          }),
          react_2.default.createElement("span", null, "Attractions"),
        ),
        react_2.default.createElement(
          "div",
          { className: "headerListItem" },
          react_2.default.createElement(react_fontawesome_1.FontAwesomeIcon, {
            icon: free_solid_svg_icons_1.faTaxi,
          }),
          react_2.default.createElement("span", null, "Airport taxis"),
        ),
      ),
      type !== "list" &&
        react_2.default.createElement(
          react_2.default.Fragment,
          null,
          react_2.default.createElement(
            "h1",
            { className: "headerTitle" },
            "A lifetime of discounts? It's Genius.",
          ),
          react_2.default.createElement(
            "p",
            { className: "headerDesc" },
            "Get rewarded for your travels - unlock instant savings of 10% or more with a free booking account",
          ),
          react_2.default.createElement(
            "button",
            { className: "headerBtn" },
            "Sign in / Register ",
          ),
          react_2.default.createElement(
            "div",
            { className: "headerSearch" },
            react_2.default.createElement(
              "div",
              { className: "headerSearchItem" },
              react_2.default.createElement(
                react_fontawesome_1.FontAwesomeIcon,
                { icon: free_solid_svg_icons_1.faBed, className: "headerIcon" },
              ),
              react_2.default.createElement("input", {
                type: "text",
                placeholder: "Where are you going?",
                className: "headerSearchInput",
              }),
            ),
            react_2.default.createElement(
              "div",
              { className: "headerSearchItem" },
              react_2.default.createElement(
                react_fontawesome_1.FontAwesomeIcon,
                {
                  icon: free_solid_svg_icons_1.faCalendarDays,
                  className: "headerIcon",
                },
              ),
              react_2.default.createElement(
                "span",
                {
                  onClick: function () {
                    return setOpenDate(!openDate);
                  },
                  className: "headerSearchText",
                },
                " ",
                ""
                  .concat(
                    (0, date_fns_1.format)(date[0].startDate, "MM/dd/yyyy"),
                    " to ",
                  )
                  .concat(
                    (0, date_fns_1.format)(date[0].endDate, "MM/dd/yyyy"),
                  ),
              ),
              openDate &&
                react_2.default.createElement(react_date_range_1.DateRange, {
                  editableDateInputs: true,
                  onChange: function (item) {
                    if (item.selection) {
                      setDate([
                        {
                          startDate: item.selection.startDate || new Date(), // Default to new Date() if undefined
                          endDate: item.selection.endDate || new Date(), // Default to new Date() if undefined
                          key: "selection",
                        },
                      ]);
                    }
                  },
                  moveRangeOnFirstSelection: false,
                  ranges: date,
                  className: "date",
                  minDate: new Date(),
                }),
            ),
            react_2.default.createElement(
              "div",
              { className: "headerSearchItem" },
              react_2.default.createElement(
                react_fontawesome_1.FontAwesomeIcon,
                {
                  icon: free_solid_svg_icons_1.faPerson,
                  className: "headerIcon",
                },
              ),
              react_2.default.createElement(
                "span",
                {
                  className: "headerSearchText",
                  onClick: function () {
                    return setOpenOptions(!openOptions);
                  },
                },
                ""
                  .concat(options.adult, " adult . ")
                  .concat(options.children, " children . ")
                  .concat(options.room, " room"),
              ),
              openOptions &&
                react_2.default.createElement(
                  "div",
                  { className: "options" },
                  react_2.default.createElement(
                    "div",
                    { className: "optionItem" },
                    react_2.default.createElement(
                      "span",
                      { className: "optionText" },
                      "Adult",
                    ),
                    react_2.default.createElement(
                      "div",
                      { className: "optionsCounter" },
                      react_2.default.createElement(
                        "button",
                        {
                          className: "optionCounterButton",
                          disabled: options.adult <= 1,
                          onClick: function () {
                            return handleOption("adult", "d");
                          },
                        },
                        "-",
                      ),
                      react_2.default.createElement(
                        "span",
                        { className: "optionsCounterNumber" },
                        options.adult,
                      ),
                      react_2.default.createElement(
                        "button",
                        {
                          className: "optionCounterButton",
                          onClick: function () {
                            return handleOption("adult", "i");
                          },
                        },
                        "+",
                      ),
                    ),
                  ),
                  react_2.default.createElement(
                    "div",
                    { className: "optionItem" },
                    react_2.default.createElement(
                      "span",
                      { className: "optionText" },
                      "Children",
                    ),
                    react_2.default.createElement(
                      "div",
                      { className: "optionsCounter" },
                      react_2.default.createElement(
                        "button",
                        {
                          className: "optionCounterButton",
                          disabled: options.children <= 0,
                          onClick: function () {
                            return handleOption("children", "d");
                          },
                        },
                        "-",
                      ),
                      react_2.default.createElement(
                        "span",
                        { className: "optionsCounterNumber" },
                        options.children,
                      ),
                      react_2.default.createElement(
                        "button",
                        {
                          className: "optionCounterButton",
                          onClick: function () {
                            return handleOption("children", "i");
                          },
                        },
                        "+",
                      ),
                    ),
                  ),
                  react_2.default.createElement(
                    "div",
                    { className: "optionItem" },
                    react_2.default.createElement(
                      "span",
                      { className: "optionText" },
                      "Rooms",
                    ),
                    react_2.default.createElement(
                      "div",
                      { className: "optionsCounter" },
                      react_2.default.createElement(
                        "button",
                        {
                          className: "optionCounterButton",
                          disabled: options.room <= 1,
                          onClick: function () {
                            return handleOption("room", "d");
                          },
                        },
                        "-",
                      ),
                      react_2.default.createElement(
                        "span",
                        { className: "optionsCounterNumber" },
                        options.room,
                      ),
                      react_2.default.createElement(
                        "button",
                        {
                          className: "optionCounterButton",
                          onClick: function () {
                            return handleOption("room", "i");
                          },
                        },
                        "+",
                      ),
                    ),
                  ),
                ),
            ),
            react_2.default.createElement(
              "div",
              { className: "headerSearchItem" },
              react_2.default.createElement(
                "button",
                { className: "headerBtn" },
                "Search",
              ),
            ),
          ),
        ),
    ),
  );
};
exports.default = Header;
