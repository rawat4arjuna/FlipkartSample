import React, { useContext, Suspense ,useTransition } from "react";
import { ContainerFluid, Container } from "../Component/container";
import { ContextOne } from "../Context/AppContext";
import { Col, LeftPanel, RightPanel } from "../Component/panel";
import Navbar from "../Component/Navbar";

import {Card} from "../Component/Card";
const FilterColumn = React.lazy(() => import("../Component/FilterColumn"));

export default function Home() {
  let { state, dispatch } = React.useContext(ContextOne);
  // React.useEffect(
  //   () => {
  //     dispatch({ type: "filter" ,payload:[]});
  //   },
  //   [state.data]
  // );
  const [startTransition, isPending] = useTransition({    timeoutMs: 3000  });
  const renderThings = (things) => {
    startTransition(() => {
    return things.map((thing) => {
      return <Card data={thing}/>;
    });
  })
  };
  return (
    <>
      <Navbar />
      <ContainerFluid>
        <Col>
          <Suspense fallback={<div>Loading...</div>}>
          <LeftPanel>
            {" "}
            <FilterColumn></FilterColumn>
          </LeftPanel>
            <RightPanel>
            {isPending ? " Loading..." : null}
              {renderThings(state.data)}</RightPanel>
          </Suspense>
        </Col>
      </ContainerFluid>
    </>
  );
}
