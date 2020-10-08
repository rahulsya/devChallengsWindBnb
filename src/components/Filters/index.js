import React from "react";
import { StaysContext } from "../../context/stays-context";
import { FILTER_DATA, TOOGLE_FILTER } from "../../context/action";
import { MdSearch, MdLocationOn, MdClose } from "react-icons/md";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function Filters() {
  const { state, dispatch } = React.useContext(StaysContext);
  const [city, setCity] = React.useState(state.city);
  //   guest
  const [adult, setAdult] = React.useState(state.adult);
  const [child, setChild] = React.useState(state.child);
  const [guest, setGuest] = React.useState(state.guest); //total guest

  let cities = getUnique(state.items, "city");

  React.useEffect(() => {
    setGuest(child + adult);
  }, [guest, child, adult]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: FILTER_DATA,
      location: city,
      guest,
      child,
      adult,
    });
    dispatch({
      type: TOOGLE_FILTER,
    });
  };

  const [activeByLocation, setActiveByLocation] = React.useState(true);
  const [activeByGuest, setActiveByGuest] = React.useState(false);

  const handleFilterType = (e, type) => {
    if (type === "byLocation") {
      setActiveByLocation(!activeByLocation);
      setActiveByGuest(false);
    }

    if (type === "byGuest") {
      setActiveByGuest(!activeByGuest);
      setActiveByLocation(false);
    }
  };

  return (
    <div className="z-10 absolute top-0 right-0 lg:w-full bg-white pb-6 w-full">
      {/* close button */}
      <div className="container mx-auto px-5 py-2">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-sm">Edit your search</div>
          <MdClose
            className="text-xl lg:text-3xl cursor-pointer hover:text-red-500"
            onClick={() => dispatch({ type: TOOGLE_FILTER })}
          />
        </div>
      </div>
      {/* end close button */}
      <div className="container mx-auto px-5 lg:px-0">
        <form onSubmit={handleSubmit}>
          <div className="px-3 py-2 flex flex-col lg:flex-row justify-between lg:items-center shadow-lg rounded-lg">
            <div className="w-full lg:w-2/3 ">
              <label htmlFor="location" className="block text-xs ">
                LOCATION
              </label>
              <input
                type="text"
                className="py-2 lg:py-0 w-full cursor-pointer"
                id="location"
                placeholder="location"
                readOnly
                value={city ? `${city},Findland` : ""}
                onClick={(e) => handleFilterType(e, "byLocation")}
              />
            </div>

            <div className="w-full lg:w-2/3">
              <label htmlFor="guest" className="block text-xs ">
                GUEST
              </label>
              <input
                type="text"
                id="guest"
                placeholder="Add guest"
                className="py-2 lg:py-0 w-full cursor-pointer"
                readOnly
                value={
                  guest
                    ? guest > 1
                      ? `${guest} guests`
                      : `${guest} guest`
                    : ""
                }
                onClick={(e) => handleFilterType(e, "byGuest")}
              />
            </div>

            <div className="w-2/3 text-center ">
              <button
                className="font-semibold text-white bg-red-500 
              py-2 px-4 rounded-lg hidden lg:block
              hover:bg-red-400"
              >
                <div className="flex items-center">
                  <div className="text-2xl pr-2">
                    <MdSearch />
                  </div>
                  Search
                </div>
              </button>
            </div>
          </div>
        </form>

        {/* filter component */}
        <div className="px-3 flex flex-col lg:flex-row justify-center lg:justify-between lg:py-6">
          <div className="w-2/3">
            {activeByLocation && (
              <ul>
                {cities.map((cityItems, i) => {
                  return (
                    <li
                      className="mt-4"
                      key={i}
                      onClick={() => setCity(cityItems)}
                    >
                      <div
                        className={`flex items-center cursor-pointer ${
                          city === cityItems ? "text-red-500" : ""
                        } `}
                      >
                        <div className="pr-2">
                          <MdLocationOn />
                        </div>
                        {cityItems}, Findland
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div className="w-2/3 ">
            {activeByGuest && (
              <div className="flex flex-col mt-4">
                <div className="flex flex-col text-sm">
                  <div className=" font-bold">Adults</div>
                  <div className="text-gray-600 ">Ages 13 or above</div>
                  <div className="flex justify-between w-16 mt-2">
                    <button
                      className="px-2 border-2"
                      onClick={() => setAdult(adult - 1)}
                      disabled={adult <= 0}
                    >
                      -
                    </button>
                    <div className=" font-bold px-3">{adult}</div>
                    <button
                      className="px-2 border-2"
                      onClick={() => setAdult(adult + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col text-sm mt-4">
                  <div className=" font-bold">Children</div>
                  <div className="text-gray-600 ">Ages 2 - 12</div>
                  <div className="flex justify-between w-16 mt-2">
                    <button
                      className="px-2 border-2"
                      onClick={() => setChild(child - 1)}
                      disabled={child <= 0}
                    >
                      -
                    </button>
                    <div className=" font-bold px-3">{child}</div>
                    <button
                      className="px-2 border-2"
                      onClick={() => setChild(child + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-full lg:w-2/3 text-center flex justify-center">
            <button
              className="mt-12 mb-5 font-semibold text-white bg-red-500 
            py-2 px-4 rounded-lg block lg:hidden
            hover:bg-red-400"
              onClick={handleSubmit}
            >
              <div className="flex items-center">
                <div className="text-2xl pr-2">
                  <MdSearch />
                </div>
                Search
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
