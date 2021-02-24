const Container = (props) => {
  return <div class="container topbar">{props.children}</div>;
};
const ContainerFluid = (props) => {
  return <div class="container-fluid topbar">{props.children}</div>;
};
export { ContainerFluid, Container };
