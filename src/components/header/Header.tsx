import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import React from "react";
const Header = ({ type }: { type: string }) => {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState<{
    adult: number;
    children: number;
    room: number;
    [key: string]: number; // Index signature
  }>({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const handleOption = (name: string, operation: string) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          {/* 1 */}
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          {/* 2 */}
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          {/* 3 */}
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          {/* 4 */}
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          {/* 5 */}
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
          {/* 6 */}
        </div>
        {type !== "list" && (
          <React.Fragment>
            <h1 className="headerTitle">
              A lifetime of discounts? It&apos;s Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free booking account
            </p>
            <button className="headerBtn">Sign in / Register </button>
            <div className="headerSearch">
              {/* 1 */}
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                />
              </div>
              {/* 2 */}
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >
                  {" "}
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy",
                  )}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => {
                      if (item.selection) {
                        setDate([
                          {
                            startDate: item.selection.startDate || new Date(), // Default to new Date() if undefined
                            endDate: item.selection.endDate || new Date(), // Default to new Date() if undefined
                            key: "selection",
                          },
                        ]);
                      }
                    }}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              {/* 3 */}
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => setOpenOptions(!openOptions)}
                >
                  {`${options.adult} adult . ${options.children} children . ${options.room} room`}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionsCounter">
                        <button
                          className="optionCounterButton"
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionsCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionsCounter">
                        <button
                          className="optionCounterButton"
                          disabled={options.children <= 0}
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionsCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Rooms</span>
                      <div className="optionsCounter">
                        <button
                          className="optionCounterButton"
                          disabled={options.room <= 1}
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionsCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* 4 */}
              <div className="headerSearchItem">
                <button className="headerBtn">Search</button>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Header;
