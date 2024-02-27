import "./index.scss";
// import TradingView from './components/TradingView';
import RouteContainer from "./routes";

function App() {
  return (
    <div className="page-container">
      {/* <div className="tradingview-container">
        <TradingView />
      </div> */}
      <RouteContainer />
    </div>
  );
}

export default App;
