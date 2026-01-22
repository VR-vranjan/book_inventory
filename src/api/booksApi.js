import axios from "axios";

const API_URL = "https://mocki.io/v1/8e0d1c4b-9f6c-4f8d-a9c1-12d8d5b3a999"; 
// (we can replace later)

export const getBooks = () => axios.get(API_URL);
