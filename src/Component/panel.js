const Col = (props) => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-12">
      <div className="row g-4">{props.children}</div>
    </div>
  );
};

const LeftPanel = (props) => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-3">
      <div className="row con-padding">{props.children}</div>
    </div>
  );
};
const RightPanel = (props) => {
    return (
      <div className="col-sm-12 col-md-8 col-lg-8 ">
        <div className="row con-padding">{props.children}</div>
      </div>
    );
  };
  export {Col,LeftPanel,RightPanel}