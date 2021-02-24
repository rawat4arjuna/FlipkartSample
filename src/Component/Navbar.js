import React, { useContext } from "react";
import { ContextOne } from "../Context/AppContext";
export default function Navbar(props) {
  let {dispatch } = useContext(ContextOne);
  const changeCurrency =(e)=>{
    dispatch({ type: "currency", currency: e.target.value})
  }
  return (
    <header class="navbar header" id="navbar">
      <div class="container-fluid">
        <span class="navbar-brand head-title">FlipKart</span>
        <form class="d-flex">
          <select
            class="form-select"
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
