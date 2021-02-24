import { isNullorUndefined, ConvertPrice } from "./Utils";
export const userFilter = (state, dispatch, data) => {
  let dataNew;
  if (!isNullorUndefined(state.filter)) {
    dataNew = state.init.filter(
      (item) => Number(state.filter.rating) <= Number(item.rating)
    );
    if (!isNullorUndefined(state.filter.category)) {
        dataNew = dataNew.filter(
        (item) => state.filter.category === item.category
      );
    }
    if(  state.filter.price[0] !== 0 &&  state.filter.price[1] !== 0)
    {
        dataNew = dataNew.filter(
            (item) =>
              ConvertPrice(state.currency, item.price) > state.filter.price[0] &&
              ConvertPrice(state.currency, item.price) < state.filter.price[1]
          );
    }
  }
  dispatch({ type: "filter", currency: state.currency, payload: dataNew });
};
