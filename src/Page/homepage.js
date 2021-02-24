import React, { useContext, Suspense ,useTransition } from "react";
import { ContainerFluid, Container } from "../Component/container";
import { ContextOne } from "../Context/AppContext";
import { Col, LeftPanel, RightPanel } from "../Component/panel";
import Navbar from "../Component/Navbar";

import {Card} from "../Component/Card";
const FilterColumn = React.lazy(() => import("../Component/FilterColumn"));

export default function Home() {
  let { state, dispatch } = React.useContext(ContextOne);
  const renderThings = (things) => {
    return things.map((thing) => {
      return <Card data={thing}/>;
    });
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
              <h4>{state.data.length} products found</h4>
              {renderThings(state.data)}</RightPanel>
          </Suspense>
        </Col>
      </ContainerFluid>
    </>
  );
}
