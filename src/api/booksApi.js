import axios from "axios";

const API_URL =
  "https://mocki.io/v1/8e0d1c4b-9f6c-4f8d-a9c1-12d8d5b3a999";

/*
  API is READ-ONLY.
  CRUD is handled in frontend state as per assignment scope.
*/

export const getBooks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
