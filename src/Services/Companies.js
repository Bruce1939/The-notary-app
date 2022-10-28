// Library imports
import axios from "axios";

// Constant imports
import { URL } from "../constants/URL";
import { endpoints } from "../constants/endpoints";

export const getCompanies = async () => {
  try {
    const response = await axios.post(URL + endpoints.companies, {});
    if (response.data.companies) return [response.data.companies, false];
    return [false, true];
  } catch (error) {
    return [false, true];
  }
};
