import { useState, useEffect } from "react";
import { Route } from "react-router";
import "./App.css";
import Nav from "./components/NavBar/Nav";
import CryptoTable from "./components/CryptoTable/CryptoTable";
import CryptoInfo from "./components/CryptoInfo/CryptoInfo";
//import LineChart from "./components/LineChart/LineChart";
/*
import { priceSort, rankSort } from "./sorting.js"; */

function App() {
  const [cryptoList, setCryptoList] = useState([]);
  const [toggle, setToggle] = useState({ toggle: false });
  const [crypto, setCrypto] = useState([]);

  const getCryptos = () => {
    let url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true";
    fetch(url)
      .then((r) => r.json())
      .then((res) => {
        if (res) {
          setCryptoList(res);
        } else {
          console.log("Error al intentar conectar");
        }
      });
  };

  const getCrypto = (id) => {
    let url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`;
    fetch(url)
      .then((r) => r.json())
      .then((res) => {
        if (res) {
          setCrypto(res);
        } else {
          console.log("Error al intentar conectar");
        }
      });
  };

  useEffect(() => {
    //setInterval(getCryptos, 5000);
    getCryptos();
  }, []);

  function handleToggle(cb) {
    if (toggle.toggle === true) {
      console.log(cb(cryptoList));
    } else {
      console.log(cryptoList);
    }
    setToggle((prev) => ({ toggle: !prev.toggle }));
  }

  return (
    <div className="grid-container">
      <Route path="/">
        <Nav cryptoList={cryptoList} getCrypto={getCrypto} />
        <div id="footer">footer</div>
      </Route>
      <Route
        exact
        path="/"
        render={() => (
          <CryptoTable cryptoList={cryptoList} getCrypto={getCrypto} />
        )}
      />
      <Route
        path={`/crypto/${crypto.id}`}
        render={() => <CryptoInfo crypto={crypto} />}
      />
    </div>
  );
}

export default App;

/* 
<LineChart lista={crypto.market_data.sparkline_7d.price} />
<LineChart lista={cryptoList} />
  <button onClick={() => handleToggle(priceSort)}>X</button>
        <button onClick={() => handleToggle(rankSort)}>R</button> 
        <CryptoLeftTable cryptoList={cryptoList} />
        <CryptoTable cryptoList={cryptoList} />
        <CryptoRightTable cryptoList={cryptoList} <div className="body-container"></div>/>*/
