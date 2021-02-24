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
                return <div class="carousel-item active ">
               <div class=" w-100 flexbox padding-2"  >
                <img src={item.image} class=" slider-img" alt="..."/>
                <h5>{item.title}</h5>
                </div>
                <div class="carousel-caption d-none d-md-block">
                 
                </div>
              </div>
            }
            return <div class="carousel-item ">
                <div class=" w-100 flexbox padding-2 "  >
                <img src={item.image} class=" slider-img" alt="..."/>
                <h5>{item.title}</h5>
                </div>
           
            <div class="carousel-caption d-none d-md-block">
              
            </div>
          </div>
        })
    }
    return <>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    {TopItemList(state)}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev">
    <span class="carousel-control-prev-icon buttonmove" aria-hidden="true">&larr;</span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next">
    <span class="carousel-control-next-icon buttonmove" aria-hidden="true">&rarr;</span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
}