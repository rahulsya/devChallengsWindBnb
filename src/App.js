import React from "react";
import logo from "./assets/logo.svg";
import { StaysContext } from "./context/stays-context";

import Filters from "./components/Filters";
import StaysItems from "./components/StaysItems";

function App() {
  let { state } = React.useContext(StaysContext);
  let [active, setActive] = React.useState(false);
  return (
    <div className="container mx-auto px-3">
      {active ? <Filters /> : null}

      <div className="flex justify-between mt-5">
        <div>
          <img src={logo} alt="winbnb logo" />
        </div>
        <div
          className="shadow-lg rounded-lg flex items-center cursor-pointer"
          onClick={(e) => setActive(!active)}
        >
          <div className="px-3">{state.city ? state.city : "location"}</div>
          <div className="border-r-2 border-l-2 py-4 px-3 text-gray-600">
            Add guest
          </div>
          <div className="px-3">
            <i className="material-icons">face</i>
          </div>
        </div>
      </div>
      {/* title */}
      <div className="flex justify-between mb-5 mt-5">
        <div className="font-bold text-2xl">Stays In Finland</div>
        <div>+12 stays</div>
      </div>
      {/* end title */}
      {/* data */}
      <StaysItems items={state.items} />
    </div>
  );
}

export default App;
