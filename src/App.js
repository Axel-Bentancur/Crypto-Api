import { useState, useEffect } from "react";
import { Route } from "react-router";

/** COMPONENTS **/
import { getCryptos } from "./components/Helpers/Helpers";
import Nav from "./components/NavBar/Nav";
import CryptoTable from "./components/CryptoTable/CryptoTable";
import CryptoInfo from "./components/CryptoInfo/CryptoInfo";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";

/** STYLES **/
import "./App.css";

function App() {
  const [cryptoList, setCryptoList] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateCryptos = () => {
    getCryptos().then((list) => {
      setCryptoList(list);
      setLoading(false);
    });
  };

  useEffect(() => {
    updateCryptos();
  }, []);

  return (
    <div className="grid-container">
      <Nav cryptoList={cryptoList} />
      <Route
        exact
        path="/"
        render={() =>
          loading ? <Loader /> : <CryptoTable cryptoList={cryptoList} />
        }
      />
      <Route
        path={`/crypto/:cryptoId`}
        render={({ match }) => <CryptoInfo match={match} />}
      />
      <Footer />
    </div>
  );
}

export default App;
