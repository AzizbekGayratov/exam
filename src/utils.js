export const addCommaToString = (num, status) => {
  if (status) {
    let millions = Math.floor(num / 1000000);
    let result = millions?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${result}M`;
  } else {
    if (num < 1) {
      return num.toFixed(3).replace("-", "-");
    } else {
      return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};

export const getFromLocalStorage = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return [];
  }
};

export const setToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getDataByCurrency = (data, currency) => {
  if (currency === "EUR") {
    return data?.eur;
  } else if (currency === "JPY") {
    return data?.jpy;
  } else if (currency === "GBP") {
    return data?.gbp;
  } else if (currency === "RUB") {
    return data?.rub;
  } else if (currency === "AED") {
    return data?.aed;
  } else {
    return data?.usd;
  }
};
