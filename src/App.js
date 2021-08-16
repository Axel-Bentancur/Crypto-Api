import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/NavBar/Nav";
import CryptoTable from "./components/CryptoTable/CryptoTable";
import CryptoLeftTable from "./components/CryptoSideTable/LeftTable/CryptoLeftTable";
import CryptoRightTable from "./components/CryptoSideTable/RightTable/CryptoRightTable";
import { priceSort, rankSort } from "./sorting.js";

const apiKey = process.env.REACT_APP_APIKEY;

function App() {
  const [cryptoList, setCryptoList] = useState([]);
  const [toggle, setToggle] = useState({ toggle: false });

  const getCryptos = (limit) => {
    let url =
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      qString =
        "?CMC_PRO_API_KEY=" + apiKey + `&start=1&limit=${limit}&convert=USD`;
    fetch(url + qString)
      .then((r) => r.json())
      .then((res) => {
        if (res) {
          setCryptoList(res.data);
        } else {
          console.log("Error al intentar conectar");
        }
      });
  };

  useEffect(() => {
    getCryptos(10);
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
    <div className="App">
      <Nav />
      <div className="body-container">
        {/*  <button onClick={() => handleToggle(priceSort)}>X</button>
        <button onClick={() => handleToggle(rankSort)}>R</button> */}
        <CryptoLeftTable cryptoList={cryptoList} />
        <CryptoTable cryptoList={cryptoList} />
        <CryptoRightTable cryptoList={cryptoList} />
      </div>
    </div>
  );
}

export default App;
