function priceSort(arr) {
  return arr.sort(function (a, b) {
    let itemA = a.quote.USD.price;
    let itemB = b.quote.USD.price;
    if (itemA < itemB) {
      return -1;
    }
    if (itemA > itemB) {
      return 1;
    }
    return 0;
  });
}

function rankSort(arr) {
  return arr.sort(function (a, b) {
    let itemA = a.cmc_rank;
    let itemB = b.cmc_rank;
    if (itemA < itemB) {
      return -1;
    }
    if (itemA > itemB) {
      return 1;
    }
    return 0;
  });
}

export { priceSort, rankSort };
