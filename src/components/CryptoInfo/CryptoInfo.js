import React, { useState, useEffect } from "react";
import "./CryptoInfo.css";
import LineChart from "../LineChart/LineChart";

export default function CryptoInfo({ crypto }) {
  const [pRender, setPRender] = useState(null);

  useEffect(() => {
    setText();
  }, [pRender]);

  const setText = () => {
    setPRender(crypto.description.en);
    let p = document.createElement("p");
    p.innerHTML = pRender;
    let text = document.querySelector("#description-text");
    text.appendChild(p);
  };

  function currencyFormat(num) {
    return `${num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, ",")}`;
  }
  function percentageFormat(num) {
    return `${num.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, ",")}%`;
  }

  return (
    <div id="main">
      <div className="crypto-grid-container">
        <div id="header">
          <div className="header-info">
            <div className="rank">
              <span>{`Rank #${crypto.market_cap_rank}`}</span>
            </div>
            <div className="crypto-symbol-name">
              <img
                className="logo-img"
                src={crypto.image.small}
                alt={crypto.name}
              />
              <span className="c-name">{crypto.name}</span>
              <span className="c-symbol">{`(${crypto.symbol.toUpperCase()})`}</span>
            </div>
            <div className="price-container">
              <span className="crypto-price">{`${currencyFormat(
                crypto.market_data.current_price.usd
              )}`}</span>
              <span
                className={
                  crypto.market_data.market_cap_change_percentage_24h < 0
                    ? "market-percentage negative"
                    : "market-percentage positive"
                }
              >{`${percentageFormat(
                crypto.market_data.market_cap_change_percentage_24h
              )}`}</span>
            </div>
          </div>
        </div>
        <div id="info-left">
          <div className="crypto-data-options">
            <span>Market Cap</span>
            <span className="num-data">{`${crypto.market_data.market_cap.usd} US$`}</span>
          </div>
          <div className="crypto-data-options">
            <span>24 Hour Trading Vol</span>
            <span className="num-data">{`${crypto.market_data.total_volume.usd} US$`}</span>
          </div>
        </div>
        <div id="info-right">
          <div className="crypto-data-options">
            <span>Circulating Supply</span>
            <span className="num-data">{`${crypto.market_data.circulating_supply} US$`}</span>
          </div>
          <div className="crypto-data-options">
            <span>Total Supply</span>
            <span className="num-data">
              {crypto.market_data.total_supply
                ? crypto.market_data.total_supply
                : "∞"}
            </span>
          </div>
        </div>
        <div id="info-link-l">
          <div className="info-links">
            <span>Web Site:</span>
          </div>
          <div className="info-links">
            <a href={`${crypto.links.homepage[0]}`}>
              <button type="button" className="btn btn-primary btn-sm">
                ethereum.org
              </button>
            </a>
          </div>
        </div>
        <div id="info-link-r">
          <div className="info-links">
            <span>Comunity:</span>
          </div>
          <div className="info-links">
            <a href={`${crypto.links.subreddit_url}`}>
              <button type="button" className="btn btn-primary btn-sm">
                Reddit
              </button>
            </a>
            <a href={`https://twitter.com/${crypto.links.twitter_screen_name}`}>
              <button type="button" className="btn btn-primary btn-sm">
                Twitter
              </button>
            </a>
            <a
              href={`https://www.facebook.com/${crypto.links.facebook_username}`}
            >
              <button type="button" className="btn btn-primary btn-sm">
                Facebook
              </button>
            </a>
          </div>
        </div>
        <div id="chart">
          <LineChart lista={crypto.market_data.sparkline_7d.price} />
        </div>
        <div id="side-info">
          <div>
            <div className="card card-width bg-tr">
              <div className="card-header card-title">
                {`${crypto.symbol.toUpperCase()} Price and Market Stats`}
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item card-li">
                  <span>{`${crypto.name} Price`}</span>
                  <span className="num-data">{`$${currencyFormat(
                    crypto.market_data.current_price.usd
                  )}`}</span>
                </li>
                <li className="list-group-item card-li">
                  <span>Market Cap</span>
                  <span className="num-data">{`$${crypto.market_data.market_cap.usd}`}</span>
                </li>
                <li className="list-group-item card-li">
                  <span>Trading Volume</span>
                  <span className="num-data">{`$${crypto.market_data.total_volume.usd}`}</span>
                </li>
                <li className="list-group-item card-li">
                  <span>Volume/Market Cap</span>
                  <span className="num-data">{`${currencyFormat(
                    crypto.market_data.total_volume.usd /
                      crypto.market_data.market_cap.usd
                  )}`}</span>
                </li>
                <li className="list-group-item card-li">
                  <span>24h Low / 24h High</span>
                  <span className="num-data">{`${crypto.market_data.high_24h.usd} / ${crypto.market_data.low_24h.usd}`}</span>
                </li>
                <li className="list-group-item card-li">
                  <span>Market Cap Rank</span>
                  <span className="num-data">
                    {`#${crypto.market_cap_rank}`}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="desc">
          <div id="description-text">
            <h3>What is {crypto.name}?</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

/* <div className="crypto-header">
        <div className="header-info">
          <div className="rank">
            <span>{`Rank #${crypto.market_cap_rank}`}</span>
          </div>
          <div className="crypto-symbol-name">
            <img
              className="logo-img"
              src={crypto.image.small}
              alt={crypto.name}
            />
            <span className="c-name">{crypto.name}</span>
            <span className="c-symbol">{`(${crypto.symbol.toUpperCase()})`}</span>
          </div>
          <div className="price-container">
            <span className="crypto-price">{`${currencyFormat(
              crypto.market_data.current_price.usd
            )}`}</span>
            <span
              className={
                crypto.market_data.market_cap_change_percentage_24h < 0
                  ? "market-percentage negative"
                  : "market-percentage positive"
              }
            >{`${percentageFormat(
              crypto.market_data.market_cap_change_percentage_24h
            )}`}</span>
          </div>
        </div>
        <div className="crypto-data">
          <div className="col">
            <div className="row">
              <div className="crypto-data-options">
                <span>Market Cap</span>
                <span className="num-data">{`${crypto.market_data.market_cap.usd} US$`}</span>
              </div>
            </div>
            <div className="row">
              <div className="crypto-data-options">
                <span>24 Hour Trading Vol</span>
                <span className="num-data">{`${crypto.market_data.total_volume.usd} US$`}</span>
              </div>
            </div>
          </div>
          <div className="col ml-column">
            <div className="row">
              <div className="crypto-data-options">
                <span>Circulating Supply</span>
                <span className="num-data">{`${crypto.market_data.circulating_supply} US$`}</span>
              </div>
            </div>
            <div className="row">
              <div className="crypto-data-options">
                <span>Total Supply</span>
                <span className="num-data">
                  {crypto.market_data.total_supply
                    ? crypto.market_data.total_supply
                    : "∞"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="info-links">
          <div className="row">
            <div className="col">
              <div className="row">
                <span>Web Site:</span>
              </div>
              <div className="row">
                <a href={`${crypto.links.homepage[0]}`}>
                  <button type="button" className="btn btn-primary btn-sm">
                    ethereum.org
                  </button>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <span>Comunity:</span>
              </div>
              <div className="col">
                <a href={`${crypto.links.subreddit_url}`}>
                  <button type="button" className="btn btn-primary btn-sm">
                    Reddit
                  </button>
                </a>
                <a
                  href={`https://twitter.com/${crypto.links.twitter_screen_name}`}
                >
                  <button type="button" className="btn btn-primary btn-sm">
                    Twitter
                  </button>
                </a>
                <a
                  href={`https://www.facebook.com/${crypto.links.facebook_username}`}
                >
                  <button type="button" className="btn btn-primary btn-sm">
                    Facebook
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card card-width bg-tr">
          <div className="card-header card-title">
            {`${crypto.symbol.toUpperCase()} Price and Market Stats`}
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item card-li">
              <span>{`${crypto.name} Price`}</span>
              <span className="num-data">{`$${currencyFormat(
                crypto.market_data.current_price.usd
              )}`}</span>
            </li>
            <li className="list-group-item card-li">
              <span>Market Cap</span>
              <span className="num-data">{`$${crypto.market_data.market_cap.usd}`}</span>
            </li>
            <li className="list-group-item card-li">
              <span>Trading Volume</span>
              <span className="num-data">{`$${crypto.market_data.total_volume.usd}`}</span>
            </li>
            <li className="list-group-item card-li">
              <span>Volume/Market Cap</span>
              <span className="num-data">{`${currencyFormat(
                crypto.market_data.total_volume.usd /
                  crypto.market_data.market_cap.usd
              )}`}</span>
            </li>
            <li className="list-group-item card-li">
              <span>24h Low / 24h High</span>
              <span className="num-data">{`${crypto.market_data.high_24h.usd} / ${crypto.market_data.low_24h.usd}`}</span>
            </li>
            <li className="list-group-item card-li">
              <span>Market Cap Rank</span>
              <span className="num-data"> {`#${crypto.market_cap_rank}`}</span>
            </li>
          </ul>
        </div>
        <span>eth roi {`${crypto.market_data.roi.percentage} US$`}</span>
        </div>
        <div id="description-text">
          <h3>Description</h3>
        </div> */
