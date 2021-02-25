import React, { Suspense } from "react";
import { ContainerFluid } from "../Component/container";
import { ContextOne } from "../Context/AppContext";
import { Col, LeftPanel, RightPanel } from "../Component/panel";
import Navbar from "../Component/Navbar";
import { Topslider } from "../Component/TopItem";
import { Card } from "../Component/Card";
import { TopFilter } from "../Component/topSortingFilter";
const FilterColumn = React.lazy(() => import("../Component/FilterColumn"));

export default function Home() {
  let { state } = React.useContext(ContextOne);
  const renderThings = (things) => {
    return things.map((thing) => {
      return <Card data={thing} currency={state.currency} />;
    });
  };
  const camelCase = (str) => {
    return str !== null ? str.toUpperCase() : "ALL PRODUCTS";
  };
  return (
    <>
      <Navbar />

      <ContainerFluid>
        <Col>
          <Topslider />
        </Col>
        <Col className={"rightpanel"}>
          <Suspense fallback={<div>Loading...</div>}>
            <LeftPanel>
              {" "}
              <FilterColumn></FilterColumn>
            </LeftPanel>
            <RightPanel>
              <TopFilter></TopFilter>
              
              <h4>{camelCase(state.filter.category)}</h4>
              <h6>{state.data.length} products found</h6>
              {renderThings(state.data)}
            </RightPanel>
          </Suspense>
        </Col>
      </ContainerFluid>
    </>
  );
}
