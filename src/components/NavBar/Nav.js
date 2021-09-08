import React, { useState } from "react";
import { Link } from "react-router-dom";

/** COMPONENTS **/
import Logo from "./Slime.png";

/** STYLES **/
import "./Nav.css";

export default function Nav({ cryptoList }) {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = cryptoList.filter((crypto) => {
        let token =
          crypto.id.toLowerCase().startsWith(text) ||
          crypto.symbol.toLowerCase().startsWith(text);
        return token;
      });
    }
    setSuggestions(matches);
    setText(text);
  };

  const onClickHandler = () => {
    setSuggestions([]);
    setText("");
  };

  return (
    <div id="nav">
      <div className="nav-container">
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="Crypto Slime Logo" />
            <span className="logoname">Crypto Slime</span>
          </div>
        </Link>
        <div className="wrapper">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              className="input-search"
              value={text}
              onChange={(e) => onChangeHandler(e.target.value)}
            />
            <div
              className={
                suggestions.length > 0
                  ? "scroll-container display"
                  : "scroll-container display-none"
              }
            >
              <div className="autocomplete-box">
                {suggestions &&
                  suggestions.map((crypto, idx) => (
                    <Link to={`/crypto/${crypto.id}`} key={idx}>
                      <li onClick={onClickHandler}>
                        <img
                          src={crypto.image}
                          alt={crypto.name}
                          className="logo-crypto"
                        />
                        <span className="crypto-name">{crypto.name}</span>
                        <span className="crypto-symbol">
                          ({crypto.symbol.toUpperCase()})
                        </span>
                      </li>
                    </Link>
                  ))}
              </div>
            </div>
            <div className="icon">
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
