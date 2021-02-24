import React, { useContext, useState } from "react";
import { ContextOne } from "../Context/AppContext";
import { userFilter } from "../Context/userAction";
import { ConvertPrice } from "../Context/Utils";
export default function PriceBlock() {
  let { state, dispatch } = useContext(ContextOne);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  let [error, setError] = useState("");
  const filterMin = (e) => {
    if (Number(e.target.value) > Number(max)) {
      setError("invalid Min price");
    } else {
      setError("");
      setMin(e.target.value);
    }
  };
  const filterMax = (e) => {
    if (Number(e.target.value) < Number(min)) {
      setError("invalid Max price");
    } else {
      setError("");
      setMax(e.target.value);
    }
  };
  const onSubmit = async () => {
    let filterData = state.filter;
    filterData.price = [min, max];
    dispatch({ type: "combination", currency: state.currency, filter: filterData });
    userFilter(state, dispatch);
  };
  return (
    <div className="row">
      <div className="col-sm-12">{error}</div>
      <div className="col-sm-6">
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">
            Min
          </span>
          <input
            type="number"
            class="form-control"
            defaultvalue={min}
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e) => {
              filterMin(e);
            }}
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">
            Max
          </span>
          <input
            type="number"
            defaultvalue={max}
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e) => {
              filterMax(e);
            }}
          />
        </div>
      </div>
      <div className="col-sm-12">
        <button
          className="btn btn-primary"
          onClick={() => {
            onSubmit();
          }}
        >
          Set Range
        </button>
      </div>
    </div>
  );
}
