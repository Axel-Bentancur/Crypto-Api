import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Logo from "./Slime.png";

export default function Nav({ cryptoList, getCrypto }) {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onChangeHandler = (text) => {
    let match = [];
    if (text.length > 0) {
      match = cryptoList.filter((crypto) => {
        let token = crypto.id.toLowerCase().startsWith(text);
        return token;
      });
    }
    setSuggestions(match);
    setText(text);
  };

  return (
    <div id="nav">
      <div className="nav-container">
        <div className="logo">
          <img src={Logo} alt="Crypto Slime Logo" />
          <span className="logoname">Crypto Slime</span>
        </div>
        <div className="wrapper">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              className="input-search"
              value={text}
              onChange={(e) => onChangeHandler(e.target.value)}
            />
            <div className="scroll-container">
              <div className="autocomplete-box">
                {suggestions &&
                  suggestions.map((e, idx) => (
                    <li key={idx} onClick={(ev) => getCrypto(`${e.id}`)}>
                      <img src={e.image} alt={e.name} className="logo-crypto" />
                      <span className="crypto-name">{e.name}</span>
                      <span className="crypto-symbol">
                        ({e.symbol.toUpperCase()})
                      </span>
                    </li>
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
