import React, { useContext } from "react";
import { ContextOne } from "../Context/AppContext";
export const Topslider = () =>{
    let { state } = useContext(ContextOne);
    const TopItemList =(state)=>{
      let  dataNew = state.init.filter(
            (item) => Number(state.filter.rating) <= 4)
        return  dataNew.map((item,i) =>{
            if(i===0)
            {
                return <div className="carousel-item active ">
               <div className=" w-100 flexbox padding-4"  >
                <img src={item.image} className=" slider-img" alt="..."/>
                <h5>{item.title}</h5>
                </div>
                <div className="carousel-caption d-none d-md-block">
                 
                </div>
              </div>
            }
            return <div className="carousel-item ">
                <div className=" w-100 flexbox padding-4 "  >
                <img src={item.image} className=" slider-img" alt="..."/>
                <h5>{item.title}</h5>
                </div>
           
            <div className="carousel-caption d-none d-md-block">
              
            </div>
          </div>
        })
    }
    return <>
    <div id="carouselExampleCaptions" className="carousel slide box-shadow " style={{background:"#fff"}} data-bs-ride="carousel">
  <div className="carousel-inner">
    {TopItemList(state)}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev">
    <span className="carousel-control-prev-icon buttonmove" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next">
    <span className="carousel-control-next-icon buttonmove" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
}