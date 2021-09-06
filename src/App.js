import { useState, useEffect } from "react";
import { Route } from "react-router";
import axios from "axios";

/** COMPONENTS **/
import Nav from "./components/NavBar/Nav";
import CryptoTable from "./components/CryptoTable/CryptoTable";
import CryptoInfo from "./components/CryptoInfo/CryptoInfo";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";

/** STYLES **/
import "./App.css";

function App() {
  const [cryptoList, setCryptoList] = useState([]);
  const [crypto, setCrypto] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cryptosPerPage] = useState(25);

  const getCryptos = async () => {
    setLoading(true);
    let url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true";
    const res = await axios.get(url);
    setCryptoList(res.data);
    setLoading(false);
  };

  const getCrypto = async (id) => {
    setLoading(true);
    let url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`;
    const res = await axios.get(url);
    setCrypto(res.data);
    setLoading(false);
  };

  const paginateNumber = (number) => {
    setCurrentPage(number);
  };

  useEffect(() => {
    getCryptos();
  }, []);

  const indexOfLastCrypto = currentPage * cryptosPerPage;
  const indexOfFirstCrypto = indexOfLastCrypto - cryptosPerPage;
  const currentCryptos = cryptoList.slice(
    indexOfFirstCrypto,
    indexOfLastCrypto
  );

  return (
    <div className="grid-container">
      <Route path="/">
        <Nav
          cryptoList={cryptoList}
          getCrypto={getCrypto}
          paginateNumber={paginateNumber}
        />
        <Footer />
      </Route>
      <Route
        exact
        path="/"
        render={() =>
          loading ? (
            <Loader />
          ) : (
            <CryptoTable
              cryptoList={currentCryptos}
              getCrypto={getCrypto}
              totalCryptos={cryptoList.length}
              cryptosPerPage={cryptosPerPage}
              paginateNumber={paginateNumber}
              currentPage={currentPage}
            />
          )
        }
      />
      <Route
        path={`/crypto/${crypto.id}`}
        render={() => (loading ? <Loader /> : <CryptoInfo crypto={crypto} />)}
      />
    </div>
  );
}

export default App;
