import React, { useContext ,useState } from "react";
import { ContainerFluid, Container } from "./container";
import { Col, LeftPanel, RightPanel } from "./panel";
import { ContextOne } from "../Context/AppContext";
import {userFilter} from "../Context/userAction"
import { isNullorUndefined } from "../Context/Utils";
import PriceBlock from "./priceBlock"
export default function FilterColumn(props) {
  let { state, dispatch } = useContext(ContextOne);
  let [Fstate, setFstate] = useState({});
  const testID = async (state) => {
    if (!isNullorUndefined(state.data)) {
      let dataNew = await state.data.filter((item) => item.id > 6);
      dispatch({ type: "filter", currency: "USD", payload: dataNew });
    }
  };
  const onSelectCategory = async (state, e) => {
    if (!isNullorUndefined(state.currency)) {
      await dispatch({ type: "reset", currency: state.currency });
      await filterCategory(e.target.value);
    }
  };
  const filterCategory = async (value) => {
    let filterData = state.filter;
    filterData.category = value
    dispatch({ type: "combination", currency: state.currency, filter: filterData });
    userFilter(state, dispatch);
  };
  const filterRating = async (state,e)=>{
    let filterData = state.filter;
    filterData.rating = e.target.value
    dispatch({ type: "combination", currency: state.currency, filter: filterData });
    userFilter(state, dispatch);
  }
  return (
    <>
      {" "}
      <div className="col-sm-12 gy-2">
        <button
          onClick={() => {
            testID(state);
          }}
        >
          Mahga
        </button>
      </div>
      <div className="col-sm-12 gy-2">
        <select
          class="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            onSelectCategory(state, e);
          }}
        >
          <option value="jewelery">jewelery</option>
          <option value="men clothing">men clothing</option>
          <option value="electronics">electronics</option>
          <option value="women clothing"> women clothing</option>
        </select>
      </div>
      <div className="col-sm-12 gy-2">
        <div class="form-check">
          <fieldset id="group2" onChange={(e)=>{filterRating(state,e)}}>
            <div className="col-sm-12 gy-2 gx-4">
            <input class="form-check-input" type="radio" value="4" name="group2" />
            <label class="form-check-label" for="flexRadioDefault1">
           4 and above
          </label>
            </div>
            <div className="col-sm-12 gy-2 gx-2">
            <input  class="form-check-input"type="radio" value="3" name="group2" />
            <label class="form-check-label" for="flexRadioDefault1">
           3 and above
          </label>
          </div>
          <div className="col-sm-12 gy-2 gx-2 ">
            <input  class="form-check-input" type="radio" value="2" name="group2" />
            <label class="form-check-label" for="flexRadioDefault1">
           2 and above
          </label>
          </div>
          <div className="col-sm-12 gy-2 gx-2 ">
            <input  class="form-check-input" type="radio" value="1" name="group2" />
            <label class="form-check-label" for="flexRadioDefault1">
           1 and above
          </label>
          </div>
          </fieldset>
        </div>
        <div className="col-sm-12 gy-2">
          <PriceBlock></PriceBlock>
        </div>
      </div>
      {props.children}
    </>
  );
}
