import { combineReducers } from "redux";
import types from "./types";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      if (state.find((contact) => contact.name === payload.name)) {
        alert(`${payload.name} is already in contacts!`);
      } else if (state.find((contact) => contact.number === payload.number)) {
        alert(`${payload.number} is already in contacts!`);
      } else return [...state, payload];

    case types.DELETE:
      return state.filter((contact) => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
