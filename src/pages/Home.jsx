import React from "react";
import { TradingViewOverview, TradingViewTicker } from "../components";

function HomePage() {
  return (
    <div>
      <center>
        <h2>NASD</h2>
      </center>
      <TradingViewTicker />
      <div className="tradingview-overview">
        <TradingViewOverview />
      </div>
      <TradingViewOverview withChart />
    </div>
  );
}

export default HomePage;
