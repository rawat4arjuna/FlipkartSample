import { ConvertPrice } from "../Context/Utils";

export const Card = (props) => {
  return (
    <>
    <div className="col-sm-12 card-main row gx-4 gy-2" style={{background:'#fff'}}>
      <div className="col-sm-12 col-md-12 col-lg-4 flexbox">
        <img src={props.data.image} alt="Image" className="card-img" />
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6 flexbox">
          <div>
          <div className="col-sm-12 card-title">
          {props.data.title}
          </div>
          <div className="col-sm-12 ">
          <span className="badge bg-secondary"> {props.data.rating} <span>&#9733;</span> </span>
          </div>
          <div className="col-sm-12 card-category"> {props.data.category}</div>
          <div className="col-sm-12 card-des" >{props.data.description}</div>
          <div className="col-sm-12"></div>
          </div>
         
      </div>
      <div className="col-sm-12 col-md-2 col-lg-2 flexbox">
          <span className="card-price">  {(ConvertPrice(props.currency,props.data.price)).toFixed(2)} {props.currency } </span>
          </div>
    </div>
    <hr className="gy-2"/>
    </>
  );
};
