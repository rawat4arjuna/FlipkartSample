import React, { useContext, useState  } from "react";
import { ContextOne } from "../Context/AppContext";
import { userFilter } from "../Context/userAction";
import { ConvertPrice } from "../Context/Utils";
export default function PriceBlock() {
  let { state, dispatch } = useContext(ContextOne);
  let [min, setMin] = useState(0);
  let [max, setMax] = useState(ConvertPrice(state.currency,800).toFixed(2));
  let [error, setError] = useState("");
  const filterMin = (e) => {
    if (Number(e.target.value) > Number(max)) {
      setError("invalid Min price");
    } else {
      setError("");
      setMin(min=e.target.value);
    }
    onCheck()
  };
  const filterMax = (e) => {
    if (Number(e.target.value) < Number(min)) {
      setError("invalid Max price");
    } else {
      setError("");
      setMax(max=e.target.value);
    }
    onCheck()
  };
  const onCheck = async () => {
    if(Number(min) < Number(max))
    {
      let filterData = state.filter;
      filterData.price = [min, max];
      dispatch({ type: "combination", currency: state.currency, filter: filterData });
      userFilter(state, dispatch);
    }
  };
  const CreateSelector = ()=>{
    const priceArr = [0,50,100,200,300,400,500,600,700,800];
    return priceArr.map(item=>{
      return <option value={ConvertPrice(state.currency,item).toFixed(2)}>{ConvertPrice(state.currency,item).toFixed(2)}</option>
    })
  }
  return (
    <div className="row">
      <div className="col-sm-12">{error}</div>
      <div className="col-sm-6">
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Min
          </span>
           <select
          className="user-form-select col-auto"
          value= {min}
          onChange={(e) => {
            filterMin(e);
          }}
        >
          {CreateSelector()}
        </select>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Max
          </span>
          <select
          className="user-form-select"
          aria-label="Default select example"
          onChange={(e) => {
            filterMax(e);
          }}
          value={max}
        >
          {CreateSelector()}
        </select>
        </div>
      </div>
    </div>
  );
}
