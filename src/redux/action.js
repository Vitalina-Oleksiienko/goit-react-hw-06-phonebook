import { v4 as uuidv4 } from "uuid";
import types from "./types";

const addNewContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const handleDelete = (id) => ({
  type: types.DELETE,
  payload: id,
});

const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addNewContact, handleDelete, changeFilter };
