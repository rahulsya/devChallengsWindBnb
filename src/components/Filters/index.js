import React from "react";
import { StaysContext } from "../../context/stays-context";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function Filters() {
  let { state } = React.useContext(StaysContext);
  let [city, setCity] = React.useState("");
  //   guest
  let [adult, setAdult] = React.useState(0);
  let [child, setChild] = React.useState(0);
  let [guest] = React.useState(adult + child);

  let cities = getUnique(state.items, "city");

  const handleToggle = (e, name) => {
    if (name === "location") {
    }
  };

  return (
    <div className="z-10 absolute container mx-auto w-full bg-white py-6">
      <div className="px-3 py-2 flex flex-col lg:flex-row justify-between lg:items-center shadow-lg rounded-lg">
        <div className="w-2/3">
          <label htmlFor="location" className="block text-xs font-semibold">
            location
          </label>
          <input
            type="text"
            id="location"
            placeholder="location"
            readOnly
            value={city ? `${city},Findland` : ""}
            className="w-full"
          />
        </div>

        <div className="w-2/3">
          <label htmlFor="guest" className="block text-xs font-semibold">
            Guest
          </label>
          <input
            type="text"
            id="guest"
            placeholder="Add guest"
            className="w-full"
            readOnly
            value={
              guest ? (guest > 1 ? `${guest} guests` : `${guest} guest`) : ""
            }
          />
        </div>

        <div className="w-2/3 text-center">
          <button className="font-semibold text-white bg-red-500 py-2 px-4 rounded-lg">
            Search
          </button>
        </div>
      </div>

      <div className="px-3 flex flex-row justify-between">
        <div className="w-2/3">
          <ul>
            {cities.map((city, i) => {
              return (
                <li className="mt-4" key={i} onClick={() => setCity(city)}>
                  {city}, Findland
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-2/3 flex flex-col mt-4">
          <div className="flex flex-col text-sm">
            <div className=" font-bold">Adults</div>
            <div className="text-gray-600 ">Ages 13 or above</div>
            <div className="flex justify-between w-16 mt-2">
              <button className="px-2 border-2">-</button>
              <div className=" font-bold px-3">{adult}</div>
              <button className="px-2 border-2">+</button>
            </div>
          </div>

          <div className="flex flex-col text-sm mt-4">
            <div className=" font-bold">Children</div>
            <div className="text-gray-600 ">Ages 2 - 12</div>
            <div className="flex justify-between w-16 mt-2">
              <button className="px-2 border-2">-</button>
              <div className=" font-bold px-3">{child}</div>
              <button className="px-2 border-2">+</button>
            </div>
          </div>
        </div>
        <div className="w-2/3"></div>
      </div>
    </div>
  );
}
