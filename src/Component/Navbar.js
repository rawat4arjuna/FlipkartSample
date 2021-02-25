import React, { useContext } from "react";
import { ContextOne } from "../Context/AppContext";
export default function Navbar(props) {
  let {dispatch } = useContext(ContextOne);
  const changeCurrency =(e)=>{
    dispatch({ type: "currency", currency: e.target.value})
  }
  return (
    <header className="navbar header" id="navbar">
      <div className="container-fluid">
        <span className="navbar-brand head-title">Ironlist</span>
        <form className="d-flex">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              changeCurrency(e)
            }}
          >
            <option value="USD" selected>
              USD
            </option>
            <option value="INR">INR</option>
            <option value="EURO">EURO</option>
          </select>
        </form>
      </div>
    </header>
  );
}
