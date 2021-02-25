const Container = (props) => {
  return <div className="container topbar">{props.children}</div>;
};
const ContainerFluid = (props) => {
  return <div className="container-fluid topbar">{props.children}</div>;
};
export { ContainerFluid, Container };
