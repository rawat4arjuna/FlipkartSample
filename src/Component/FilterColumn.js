import React, { useContext } from "react";
import { ContainerFluid, Container } from "./container";
import { Col, LeftPanel, RightPanel } from "./panel";
import { ContextOne } from "../Context/AppContext";
import { isNullorUndefined } from "../Context/Utils";
export default function FilterColumn(props) {
  let { state, dispatch } = React.useContext(ContextOne);
  const testID = async (state) => {
    if (!isNullorUndefined(state.data)) {
      console.warn("--------9090-----------",state.data)
    let dataNew =  await state.data.filter((item) => item.id >300);
    console.log(dataNew,"0-0-0-")
    dispatch({type:"filter",payload: dataNew});
    }
    
  };
  return <>
    <button onClick={()=>{testID(state)}} >Mahga</button>
  {props.children}</>
}
