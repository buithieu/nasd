import React, { useEffect, useRef } from "react";

function TradingViewOverview(props) {
  const { withChart } = props;
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;
    if (withChart) {
      script.innerHTML = `
        {
          "colorTheme": "light",
          "dateRange": "12M",
          "showChart": true,
          "locale": "en",
          "largeChartUrl": "",
          "isTransparent": false,
          "showSymbolLogo": true,
          "showFloatingTooltip": false,
          "width": "400",
          "height": "550",
          "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
          "plotLineColorFalling": "rgba(41, 98, 255, 1)",
          "gridLineColor": "rgba(42, 46, 57, 0)",
          "scaleFontColor": "rgba(106, 109, 120, 1)",
          "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
          "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
          "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
          "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
          "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
          "tabs": [
            {
              "title": "Futures",
              "symbols": [
                {
                  "s": "CME_MINI:ES1!",
                  "d": "S&P 500"
                },
                {
                  "s": "CME:6E1!",
                  "d": "Euro"
                },
                {
                  "s": "COMEX:GC1!",
                  "d": "Gold"
                },
                {
                  "s": "NYMEX:CL1!",
                  "d": "WTI Crude Oil"
                },
                {
                  "s": "NYMEX:NG1!",
                  "d": "Gas"
                },
                {
                  "s": "CBOT:ZC1!",
                  "d": "Corn"
                }
              ],
              "originalTitle": "Futures"
            },
            {
              "title": "Bonds",
              "symbols": [
                {
                  "s": "CBOT:ZB1!",
                  "d": "T-Bond"
                },
                {
                  "s": "CBOT:UB1!",
                  "d": "Ultra T-Bond"
                },
                {
                  "s": "EUREX:FGBL1!",
                  "d": "Euro Bund"
                },
                {
                  "s": "EUREX:FBTP1!",
                  "d": "Euro BTP"
                },
                {
                  "s": "EUREX:FGBM1!",
                  "d": "Euro BOBL"
                }
              ],
              "originalTitle": "Bonds"
            },
            {
              "title": "Forex",
              "symbols": [
                {
                  "s": "FX:EURUSD",
                  "d": "EUR to USD"
                },
                {
                  "s": "FX:GBPUSD",
                  "d": "GBP to USD"
                },
                {
                  "s": "FX:USDJPY",
                  "d": "USD to JPY"
                },
                {
                  "s": "FX:USDCHF",
                  "d": "USD to CHF"
                },
                {
                  "s": "FX:AUDUSD",
                  "d": "AUD to USD"
                },
                {
                  "s": "FX:USDCAD",
                  "d": "USD to CAD"
                }
              ],
              "originalTitle": "Forex"
            }
          ]
        }`;
    } else {
      script.innerHTML = `
        {
          "colorTheme": "light",
          "dateRange": "12M",
          "showChart": false,
          "locale": "en",
          "largeChartUrl": "",
          "isTransparent": false,
          "showSymbolLogo": true,
          "showFloatingTooltip": false,
          "width": "100%",
          "height": "100%",
          "tabs": [
            {
              "title": "NGOẠI HỐI",
              "symbols": [
                {
                  "s": "FX:EURUSD",
                  "d": "EUR USD"
                },
                {
                  "s": "FX:EURGBP",
                  "d": "EUR/GBP"
                },
                {
                  "s": "FX:AUDUSD",
                  "d": "AUD/USD"
                },
                {
                  "s": "FX_IDC:USDCNY",
                  "d": "USD/CNY"
                },
                {
                  "s": "FX:USDCAD",
                  "d": "USD/CAD"
                },
                {
                  "s": "FX:USDJPY",
                  "d": "USD/JPY"
                },
                {
                  "s": "FX:USDCHF",
                  "d": "USD/CHF"
                },
                {
                  "s": "OANDA:GBPCAD",
                  "d": "GBP/CAD"
                },
                {
                  "s": "FX:GBPAUD"
                },
                {
                  "s": "FX:GBPUSD",
                  "d": "GBP/USD"
                }
              ],
              "originalTitle": "Indices"
            },
            {
              "title": "CHUỖI KHỐI",
              "symbols": [
                {
                  "s": "BINANCE:ETHBTC",
                  "d": "ETHERIUM / BTC"
                },
                {
                  "s": "BITSTAMP:ETHUSD",
                  "d": "ETHERIUM USD"
                },
                {
                  "s": "OKX:EOSUSD01H2024",
                  "d": "EOS/USD"
                },
                {
                  "s": "BITSTAMP:BTCUSD",
                  "d": "BTC/USD"
                },
                {
                  "s": "CRYPTOCAP:DOGE",
                  "d": "DOGE COIN"
                },
                {
                  "s": "MEXC:GROKUSDT",
                  "d": "GROK/USD"
                },
                {
                  "s": "NASDAQ:LUNA",
                  "d": "LUNA USD"
                },
                {
                  "s": "CRYPTOCAP:ADA",
                  "d": "ADA"
                }
              ],
              "originalTitle": "Futures"
            },
            {
              "title": "KIM LOẠI QUÝ",
              "symbols": [
                {
                  "s": "TVC:GOLD",
                  "d": "GOLD"
                },
                {
                  "s": "NSE:OIL",
                  "d": "NEW YORK OIL"
                },
                {
                  "s": "TVC:SILVER",
                  "d": "SILVER"
                }
              ],
              "originalTitle": "Bonds"
            },
            {
              "title": "CỔ PHIẾU",
              "symbols": [
                {
                  "s": "NASDAQ:AMZN",
                  "d": "AMAZON"
                },
                {
                  "s": "NASDAQ:TSLA",
                  "d": "TESLA"
                },
                {
                  "s": "NASDAQ:VFS",
                  "d": "VINFAST AUTO"
                }
              ],
              "originalTitle": "Forex"
            }
          ]
        }`;
    }
    container.current.appendChild(script);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default TradingViewOverview;
