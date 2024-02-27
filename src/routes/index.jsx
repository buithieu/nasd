import React from "react";
import { Routes, Route } from "react-router-dom";
import RoutesConstant from "./routes";
import { AccountPage, DepositPage, HomePage, MarketPage } from "../pages";
import { MenuBar } from "../components";

const RouteContainer = () => {
  return (
    <div>
      <Routes>
        <Route path={RoutesConstant.HOME} element={<HomePage />} />
        <Route path={RoutesConstant.MARKET} element={<MarketPage />} />
        <Route path={RoutesConstant.DEPOSIT} element={<DepositPage />} />
        <Route path={RoutesConstant.ACCOUNT} element={<AccountPage />} />

        {/* <Route path={routes.MARKET} element={<PremisesPage />} />
        <Route path={routes.CUSTOMER} element={<ReschedulePage />} />
        <Route path={routes.DEPOSIT} element={<ReviewPage />} />
        <Route path={routes.ACCOUNT} element={<ThankYouPage />} /> */}
      </Routes>
      <MenuBar />
    </div>
  );
};

export default RouteContainer;
