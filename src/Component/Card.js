export const Card = (props) => {
  return (
    <div className="col-sm-12 card-main row gx-4">
      <div className="col-sm-12 col-md-4 col-lg-4 flexbox">
        <img src={props.data.image} alt="Image" className="card-img" />
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6 flexbox">
          <div>
          <div className="col-sm-12 card-title">
          {props.data.title}
          </div>
          <div className="col-sm-12 ">
            {props.data.rating}
          </div>
          <div className="col-sm-12"> {props.data.category}</div>
          <div className="col-sm-12">{props.data.description}</div>
          <div className="col-sm-12"></div>
          </div>
         
      </div>
      <div className="col-sm-12 col-md-2 col-lg-2 flexbox">
          <span className="card-price"> {props.data.price}</span>
          </div>
    </div>
  );
};
