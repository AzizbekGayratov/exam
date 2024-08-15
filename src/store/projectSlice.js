import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage, setToLocalStorage } from "../utils";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    data: [],
    currency: getFromLocalStorage("currency") || {
      currency: "USD",
      symbol: "$",
    },
    currencyList: ["USD", "EUR", "JPY", "GBP", "RUB", "AED"],
    isDrawerOpen: false,
    error: null,
    isLoading: false,
  },
  reducers: {
    setProjects: (state, action) => {
      state.data = action.payload;
    },
    setCurrency: (state, action) => {
      if (action.payload == "EUR") {
        state.currency = {
          currency: "EUR",
          symbol: "€",
        };
      } else if (action.payload == "JPY") {
        state.currency = {
          currency: "JPY",
          symbol: "¥",
        };
      } else if (action.payload == "GBP") {
        state.currency = {
          currency: "GBP",
          symbol: "£",
        };
      } else if (action.payload == "RUB") {
        state.currency = {
          currency: "RUB",
          symbol: "₽",
        };
      } else if (action.payload == "AED") {
        state.currency = {
          currency: "AED",
          symbol: "د.إ",
        };
      } else {
        state.currency = {
          currency: "USD",
          symbol: "$",
        };
      }
      setToLocalStorage("currency", state.currency);
    },
    setIsDrawerOpen: (state, action) => {
      state.isDrawerOpen = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setProjects,
  setCurrency,
  setIsDrawerOpen,
  setError,
  setIsLoading,
} = projectSlice.actions;
export default projectSlice.reducer;
