import React from "react";
import logo from "./assets/logo.svg";
import { StaysContext } from "./context/stays-context";
import { TOOGLE_FILTER } from "./context/action";
import { MdSearch } from "react-icons/md";

import Filters from "./components/Filters";
import StaysItems from "./components/StaysItems";

function App() {
  let { state, dispatch } = React.useContext(StaysContext);

  return (
    <div className="container mx-auto px-3">
      {state.toggleFilter ? <Filters /> : null}

      <div className="flex flex-col lg:flex-row lg:justify-between mt-5">
        <div className="mb-4 cursor-pointer">
          <img src={logo} alt="winbnb logo" />
        </div>
        <div
          className="shadow-lg rounded-lg flex items-center cursor-pointer 
          w-3/5 lg:w-auto mx-auto lg:mx-0
          hover:bg-gray-200"
          onClick={(e) => dispatch({ type: TOOGLE_FILTER })}
        >
          <div className="px-3">
            {state.city ? `${state.city}, Findland` : "Add location"}
          </div>
          <div className="border-r-2 border-l-2 py-4 px-3 text-gray-600">
            {state.guest
              ? state.guest > 1
                ? `${state.guest} guests`
                : `${state.guest} guest`
              : "Add Guest"}
          </div>
          <div className="px-3">
            <MdSearch className="text-red-500 text-2xl" />
          </div>
        </div>
      </div>
      {/* title */}
      <div className="flex justify-between mb-5 mt-5 font-bold">
        <div className=" text-2xl">Stays In Finland</div>
        <div className="text-gray-800">+{state.shortedItems.length} stays</div>
      </div>
      {/* end title */}
      {/* data */}
      <StaysItems items={state.shortedItems} />
    </div>
  );
}

export default App;
