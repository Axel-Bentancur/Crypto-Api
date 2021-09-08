import axios from "axios";

const getCryptos = async () => {
  let url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true";
  const res = await axios.get(url);
  return res.data;
};

const getCrypto = async (id) => {
  let url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`;
  const res = await axios.get(url);
  return res.data;
};

const currency = (num) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(num);
};

const currencyVol = (num) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  return formatter.format(num);
};

const percentage = (num) => {
  let porcent = num.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, ",");
  if (porcent < 0) {
    return `${porcent}%`;
  } else {
    return `${porcent}%`;
  }
};

export { percentage, currency, getCrypto, getCryptos, currencyVol };
