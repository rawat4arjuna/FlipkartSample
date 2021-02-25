import React, { useContext } from "react";
import { ContextOne } from "../Context/AppContext";
export const TopFilter = () => {
    let { state, dispatch } = useContext(ContextOne);
    const onPopularity =(valA,valB)=>{
        const rateA = valA.rating;
        const rateB = valB.rating;
        let comparison = 0;
        if(rateA<rateB) {
            comparison = 1;
        }
        else
        {
            comparison = -1
        }
        return comparison

    }
    const onLowtoHigh =(valA,valB)=>{
        const priceA = valA.price;
        const priceB = valB.price;
        let comparison = 0;
        if(priceA>priceB) {
            comparison = 1;
        }
        else
        {
            comparison = -1
        }
        return comparison
    }
    const onHightoLow =(valA,valB)=>{
        const priceA = valA.price;
        const priceB = valB.price;
        let comparison = 0;
        if(priceA<priceB) {
            comparison = 1;
        }
        else
        {
            comparison = -1
        }
        return comparison
        
    }
    const compare =(tag)=>{
        let dataNew;
        switch(tag)
        {
            case "pop":
               dataNew =  state.data.sort(onPopularity);
              dispatch({ type: "filter", currency: state.currency, payload: dataNew });
                break;
            case "lth":
                 dataNew =  state.data.sort(onLowtoHigh);
                dispatch({ type: "filter", currency: state.currency, payload: dataNew });
                
                break;
            case "htl":
                 dataNew =  state.data.sort(onHightoLow);
                dispatch({ type: "filter", currency: state.currency, payload: dataNew });
                
                break;
            default:
        }
    }
  return (
    <>
      <div className="col-sm-12 py-4">
        <div className="btn-group" role="group" aria-label="Basic outlined example">
           <div style={{padding:'10px'}}><span>Sort by</span></div> 
          <button type="button" className="btn btn-outline-dark" onClick={()=>{compare("pop")}}>
            Sort by Popularity
          </button>
          <button type="button" className="btn btn-outline-dark" onClick={()=>{compare("lth")}}>
            Price- Low to High
          </button>
          <button type="button" className="btn btn-outline-dark" onClick={()=>{compare("htl")}}>
            Price- High to Low
          </button>
        </div>
      </div>
    </>
  );
};
