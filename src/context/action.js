export const FILTER_DATA = "FILTER_DATA";
export const TOOGLE_FILTER = "TOOGLE_FILTER";

export const filterData = (location, guest, child, adult) => {
  return {
    type: FILTER_DATA,
    location,
    guest,
    child,
    adult,
  };
};

export const toogleFilter = () => {
  return {
    type: TOOGLE_FILTER,
  };
};
